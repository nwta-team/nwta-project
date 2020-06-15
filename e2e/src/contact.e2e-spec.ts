import { browser, logging } from 'protractor';
import { ContactPage } from './contact.po';

describe('Drinks page', () => {
  let page: ContactPage;

  beforeEach(() => {
    page = new ContactPage();
    page.navigateTo();
  });

  it('should render the Newsletter info', () => {
    expect(page.getContactEmailText()).toBeDefined();
  });

  it('should render the Contact Info', () => {
    expect(page.getContactHeader()).toBeDefined();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
