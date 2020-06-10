import { browser, logging } from 'protractor';
import { FoodsPage } from './foods.po';

describe('Foods page', () => {
  let page: FoodsPage;

  beforeEach(() => {
    page = new FoodsPage();
    page.navigateTo();
  });

  it('should display welcome text', () => {
    expect(page.getWelcomeText()).toBeDefined();
  });

  it('should display foods header', () => {
    expect(page.getFoodsHeaderText()).toEqual('Meals For Every One');
  });

  it('should display all random meal images', () => {
    expect(page.getRandomMeal().count()).toBe(5);
  });

  it('should route to recipe', () => {
    page.getRecipeButton().click();
    expect(page.getRecipeText()).not.toEqual('Recipe');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
