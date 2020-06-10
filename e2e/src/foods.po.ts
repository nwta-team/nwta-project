import { browser, by, element } from 'protractor';

export class FoodsPage {
  navigateTo() {
    return browser.get('/foods');
  }


  getFoodsHeaderText() {
    return element(by.css('.header')).getText();
  }

  getWelcomeText() {
    return element(by.css('.welcome')).getText();
  }

  getRandomMeal() {
    return element.all(by.css('.randomMealPhoto'));
  }

  getRecipeButton() {
    return element(by.css('.reciperouter'));
  }

  getRecipeText() {
    return element(by.css('app-recipe h1')).getText();
  }
}
