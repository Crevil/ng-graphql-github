import { NgGraphqlGithubPage } from './app.po';

describe('ng-graphql-github App', () => {
  let page: NgGraphqlGithubPage;

  beforeEach(() => {
    page = new NgGraphqlGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular repo crawler');
  });
});
