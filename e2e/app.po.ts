import {
  browser,
  by,
  element,
  promise,
} from 'protractor';

export class NgGraphqlGithubPage {
  navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  getParagraphText(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
