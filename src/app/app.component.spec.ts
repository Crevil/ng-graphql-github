import {
  async,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import {
  MdCardModule,
  MdInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';

import { ComponentFixture, tick } from '@angular/core/testing';
import { AuthService } from 'app/auth.service';
import { IGitHubSearchResult } from 'app/github-search-result.model';
import { RepositoryDetailsComponent } from 'app/repository-details/repository-details.component';
import { RepositoryListComponent } from 'app/repository-list/repository-list.component';
import { RestService } from 'app/rest.service';
import { SearchInputComponent } from 'app/search-input/search-input.component';
import { StarsComponent } from 'app/stars/stars.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let restService: RestService;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent,
          RepositoryDetailsComponent,
          RepositoryListComponent,
          SearchInputComponent,
          StarsComponent,
        ],
        imports: [
          BrowserAnimationsModule,
          MdCardModule,
          MdInputModule,
        ],
        providers: [
          {
            provide: RestService,
            useValue: {
              search: (_) => Observable.of(),
            } as RestService,
          },
          {
            provide: AuthService,
            useValue: {
              authenticate: () => { },
            } as AuthService,
          },
        ],
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    restService = fixture.debugElement.injector.get(RestService);
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular repo crawler');
  }));

  it('should query api and map result to repositories on query changes', fakeAsync(() => {
    const searchResult = {
      items: [{
        full_name: 'some-repo',
        description: 'some-description',
        html_url: 'some-url',
        owner: { login: 'some-owner', html_url: 'some-owner-url' },
        stargazers_count: 1,
      }],
    } as IGitHubSearchResult;
    spyOn(restService, 'search').and.returnValue(Observable.of(searchResult));

    fixture.detectChanges();

    component.queryChanged('newQuery');
    tick(300);

    expect(component.repositories.length).toBe(1);
    expect(component.repositories[0].name).toBe('some-repo');
  }));

  it('should throtle query changes', fakeAsync(() => {
    const searchSpy = spyOn(restService, 'search').and.callThrough();

    fixture.detectChanges();

    component.queryChanged('query');
    tick(100);
    component.queryChanged('newQuery');
    tick(300);

    expect(searchSpy).toHaveBeenCalledTimes(1);
    expect(searchSpy).toHaveBeenCalledWith('newQuery');
  }));
});
