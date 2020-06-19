import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/auth/login');
  }

  getAuthElement() {
    return element(by.tagName('ngx-auth-firebaseui'));
  }
}
