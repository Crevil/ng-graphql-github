import {
  Component,
  Input,
} from '@angular/core';

import { IRepository } from 'app/repository-list/repositories.model';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css'],
})
export class RepositoryDetailsComponent {
  @Input() repository: IRepository;
}
