import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MdCardModule } from '@angular/material';

import { IRepository } from 'app/repository-list/repositories.model';
import { RepositoryDetailsComponent } from './repository-details.component';

describe('RepositoryDetailsComponent', () => {
  let component: RepositoryDetailsComponent;
  let fixture: ComponentFixture<RepositoryDetailsComponent>;

  let repository: IRepository;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [RepositoryDetailsComponent],
        imports: [
          MdCardModule,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryDetailsComponent);
    component = fixture.componentInstance;

    repository = {
      name: 'apollo-client',
      description: 'GraphQL client for Angular',
      owner: { name: 'Apollo' },
      stars: 5,
      tags: ['graphql', 'angular'],
    };
    component.repository = repository;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
