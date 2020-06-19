import { browser, logging } from 'protractor';
import { DrinksSubpage } from './drink-subpage.po';

describe('Drinks Subpage', () => {
  let page: DrinksSubpage;

  beforeEach(() => {
    page = new DrinksSubpage();
    page.navigateTo();
  });

  it('should display drink name', () => {
    expect(page.getDrinkTitle()).toBe('Hunter\'s Moon');
  });

  it('should display drink image', () => {
    expect(page.getDrinkImage()).toBeDefined();
  });

  it('should display 5 ingredients', () => {
    expect(page.getIngredients().count()).toBe(15);
  });

  it('should display instructions', () => {
    expect(page.getInstructions()).toBeDefined();
  });

  it('should display glass', () => {
    expect(page.getGlass()).toBeDefined();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
