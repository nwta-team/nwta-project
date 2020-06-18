import { browser, logging } from 'protractor';
import { Recipe } from './recipe.po';

describe('Recipe', () => {
  let page: Recipe;

  beforeEach(() => {
    page = new Recipe();
    page.navigateTo();
  });

  it('should display meal image', () => {
    expect(page.getMealImage()).toBeDefined();
  });

  it('should display 12 ingredients', () => {
    expect(page.getMealIngredients().count()).toBe(0);
  });

  it('should display 12 measure', () => {
    expect(page.getMealMeasure().count()).toBe(0);
  });

  it('should display instruction', () => {
    expect(page.getMealInstructions()).toBeDefined();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
