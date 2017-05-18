import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptionsArgs,
  URLSearchParams,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { v4 } from 'uuid';

const STATE_KEY = 'ngGraphqlGithub.state';
const GITHUB_CLIENT_ID = 'afc51265fa9aa8698827';
const GITHUB_CLIENT_SECRET = 'b09f4b2cd3f244cc0f7840091689fec75feba902';

@Injectable()
export class AuthService {
  private authorizeUrl = 'https://github.com/login/oauth/authorize';
  private exhangeUrl = 'https://github.com/login/oauth/access_token';
  private corsProxy = 'https://cors-anywhere.herokuapp.com';

  private token: string;
  private scope: string[];

  constructor(private http: Http) { }

  public authenticate(): void {
    const parameters = new URLSearchParams();
    parameters.append('client_id', GITHUB_CLIENT_ID);
    parameters.append('state', this.createState())

    const redirectionUrl = `${this.authorizeUrl}?${parameters}`;
    window.location.href = redirectionUrl;
  }

  public verifyAuthentication(): void {
    const params = new URLSearchParams(window.location.search.substr(1));
    const code = params.get('code');
    const state = params.get('state');

    if (!!code && !!state && this.isStateValid(state)) {
      this.exchangeCodeForToken(code, state)
        .subscribe((result) => {
          this.token = result.token_type;
          this.scope = result.scope.split(',');

          console.log('verified', result)
        });
    }
  }

  public getToken(): string {
    return this.token;
  }

  private exchangeCodeForToken(code: string, state: string): Observable<IGitHubExchangeResult> {
    const params = new URLSearchParams();
    params.append('client_id', GITHUB_CLIENT_ID);
    params.append('client_secret', GITHUB_CLIENT_SECRET);
    params.append('code', encodeURIComponent(code));
    params.append('state', encodeURIComponent(state));

    const options: RequestOptionsArgs = {
      search: params,
    };

    const corsWrappedExchangeUrl = `${this.corsProxy}/${this.exhangeUrl}`;
    return this.http.post(corsWrappedExchangeUrl, undefined, { search: params })
      .map((response) => {
        const body = response.text();
        const parts = body.split('&');
        const tokenPart = parts[0];
        const scopePart = parts[1];
        const typePart = parts[2];

        const result: IGitHubExchangeResult = {
          access_token: tokenPart.split('=')[1],
          scope: scopePart.split('=')[1],
          token_type: typePart.split('=')[1],
        };
        return result;
      })
  }

  private createState(): string {
    const state = v4();
    window.localStorage.setItem(STATE_KEY, state);
    return state;
  }

  private isStateValid(state: string): boolean {
    const storedState = window.localStorage.getItem(STATE_KEY);

    return !!storedState && storedState === state;
  }
}

export interface IGitHubExchangeResult {
  access_token: string;
  scope: string;
  token_type: string;
}
