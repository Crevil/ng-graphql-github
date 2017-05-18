import {
  Component,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/mergeMap';

import { AuthService } from 'app/auth.service';
import { IRepository } from 'app/repository-list/repositories.model';
import { RestService } from 'app/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  repositories: IRepository[];
  private queryChanges = new Subject<string>();

  constructor(private rest: RestService, private auth: AuthService) { }

  public ngOnInit(): void {
    this.auth.verifyAuthentication();

    this.queryChanges
      .debounceTime(200)
      .mergeMap((query) => this.rest.search(query))
      .map((result) => {
        const { items } = result;

        return items.map((item) => ({
          name: item.full_name,
          description: item.description,
          url: item.html_url,
          owner: {
            name: item.owner.login,
            url: item.owner.html_url,
          },
          stars: item.stargazers_count,
          tags: [],
        } as IRepository));
      })
      .subscribe((repos) => this.repositories = repos);
  }

  public queryChanged(query: string): void {
    this.queryChanges.next(query);
  }

  public logon(): void {
    this.auth.authenticate();
  }
}
