import { Component } from '@angular/core';

import { IRepository } from 'app/repository-list/repositories.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  repositories: IRepository[] = [{
    name: 'apollo-client',
    description: 'GraphQL client for Angular',
    owner: { name: 'Apollo' },
    stars: 5,
    tags: ['graphql', 'angular'],
  }, {
    name: 'apollo-client',
    description: 'GraphQL client for Angular',
    owner: { name: 'Apollo' },
    stars: 5,
    tags: ['graphql', 'angular'],
  }];

  queryChanged(query: string): void {
    console.log('changed', query);
  }
}
