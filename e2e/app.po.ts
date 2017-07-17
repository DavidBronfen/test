import { browser, by, element } from 'protractor';

export class NetcraftDavidPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
