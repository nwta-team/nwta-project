import { browser, logging } from 'protractor';
import { DrinksPage } from './drinks.po';

describe('Drinks page', () => {
  let page: DrinksPage;

  beforeEach(() => {
    page = new DrinksPage();
    page.navigateTo();
  });

  it('should render the drinks logo', () => {
    expect(page.getDrinksLogo()).toBeDefined();
  });

  it('should display header with expected title', () => {
    expect(page.getTitleText()).toBe('Coctails');
  });

  it('should display welcome text', () => {
    expect(page.getWelcomeText()).toBeDefined();
  });

  it('should display three random drink images', () => {
    expect(page.getThreeDrinks().count()).toBe(3);
  });

  it('should redirect to drink subpage on drink click', () => {
    page.getDrink().click();
    expect(browser.getCurrentUrl()).not.toBe('/drinks');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
