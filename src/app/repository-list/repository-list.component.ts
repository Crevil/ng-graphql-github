import {
  Component,
  Input,
} from '@angular/core';

import { IRepository } from 'app/repository-list/repositories.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css'],
})
export class RepositoryListComponent {
  @Input() repositories: IRepository[];
}
