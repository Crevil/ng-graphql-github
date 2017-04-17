import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MdCardModule } from '@angular/material';

import { RepositoryDetailsComponent } from 'app/repository-details/repository-details.component';
import { RepositoryListComponent } from './repository-list.component';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          RepositoryListComponent,
          RepositoryDetailsComponent,
        ],
        imports: [
          MdCardModule,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
