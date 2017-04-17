import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Output() query = new EventEmitter<string>();

  inputChanged(event: Event): void {
    const inputField = event.target as HTMLInputElement;
    this.query.emit(inputField.value);
  }
}
