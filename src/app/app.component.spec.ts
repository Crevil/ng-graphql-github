import {
  async,
  TestBed,
} from '@angular/core/testing';
import { MdCardModule } from '@angular/material';

import { RepositoryDetailsComponent } from 'app/repository-details/repository-details.component';
import { RepositoryListComponent } from 'app/repository-list/repository-list.component';
import { SearchInputComponent } from 'app/search-input/search-input.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent,
          RepositoryDetailsComponent,
          RepositoryListComponent,
          SearchInputComponent,
        ],
        imports: [
          MdCardModule,
        ],
      }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular repo crawler');
  }));
});
