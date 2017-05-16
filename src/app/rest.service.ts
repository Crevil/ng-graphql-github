import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptionsArgs,
  URLSearchParams,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';

import { IGitHubSearchResult } from 'app/github-search-result.model';

@Injectable()
export class RestService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: Http) { }

  public search(query: string): Observable<IGitHubSearchResult> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.github.v3+json');

    const search = new URLSearchParams();
    search.append('q', query);

    const options: RequestOptionsArgs = {
      headers,
      search,
    };

    return this.http.get(`${this.baseUrl}/search/repositories`, options)
      .map((response) => response.json());
  }
}
