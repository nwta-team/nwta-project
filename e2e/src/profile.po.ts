import { browser } from 'protractor';

export class ProfilePage {
  navigateTo() {
    return browser.get('/profile');
  }


}
