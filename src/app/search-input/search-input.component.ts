import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  @Output() query = new EventEmitter<string>();
  private queryOutput: Subject<string>;

  ngOnInit(): void {
    this.queryOutput = new Subject<string>();
    this.queryOutput
      .debounceTime(200)
      .subscribe((queryString) => this.query.emit(queryString));
  }

  inputChanged(event: Event): void {
    const inputField = event.target as HTMLInputElement;
    this.queryOutput.next(inputField.value);
  }
}
