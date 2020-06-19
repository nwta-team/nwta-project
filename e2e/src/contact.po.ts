import { browser, by, element } from 'protractor';

export class ContactPage {
  navigateTo() {
    return browser.get('/contact');
  }

  getContactEmailText() {
    return element(by.id('contactEmailText')).getText();
  }

  getContactHeader() {
    return element(by.id('contactHeader')).getText();
  }
}