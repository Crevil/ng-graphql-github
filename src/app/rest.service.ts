import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptionsArgs,
  URLSearchParams,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';

@Injectable()
export class RestService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: Http) { }

  public search(query: string): Observable<IGitHubSearchResult> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.github.v3+json');
    // headers.append('Authorization', `token ${environment.ghToken}`);

    const params = new URLSearchParams();
    params.append('q', query);

    const options: RequestOptionsArgs = {
      headers,
      search: params,
    };

    return this.http.get(`${this.baseUrl}/search/repositories`, options)
      .map((response) => response.json());
  }
}

export interface IGitHubSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: Array<{
    id: number;
    name: string;
    full_name: string;
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      received_events_url: string;
      type: string;
    };
    private: boolean;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    language: string;
    forks_count: number;
    open_issues_count: 0;
    master_branch: string;
    default_branch: string;
    score: number;
    tags_url: string;
  }>;
}
