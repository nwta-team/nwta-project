import { browser, logging } from 'protractor';
import { ProfilePage } from './profile.po';

describe('Profile page', () => {
  let page: ProfilePage;

  beforeEach(() => {
    page = new ProfilePage();
    page.navigateTo();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
