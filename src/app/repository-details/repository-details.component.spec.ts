import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MdCardModule } from '@angular/material';

import { IRepository } from 'app/repository-list/repositories.model';
import { StarsComponent } from 'app/stars/stars.component';
import { RepositoryDetailsComponent } from './repository-details.component';

describe('RepositoryDetailsComponent', () => {
  let component: RepositoryDetailsComponent;
  let fixture: ComponentFixture<RepositoryDetailsComponent>;

  let repository: IRepository;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          RepositoryDetailsComponent,
          StarsComponent,
          ],
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
      url: 'some-url',
      owner: { name: 'Apollo', url: 'some-url' },
      stars: 5,
      tags: ['graphql', 'angular'],
    };
    component.repository = repository;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description in mg-card-content tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-content p').textContent).toContain(repository.description);
  }));

  it('should render without errors if repository is falsy', async(() => {
    component.repository = undefined;
    fixture.detectChanges();
  }));
});
