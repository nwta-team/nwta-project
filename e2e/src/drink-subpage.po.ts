import { browser, by, element } from 'protractor';

export class DrinksSubpage {
  navigateTo() {
    return browser.get('/drink/17239');
  }

  getDrinkTitle() {
    return element(by.id('title')).getText();
  }

  getDrinkImage() {
    return element(by.css('.drinkPic'));
  }

  getIngredients() {
    return element.all(by.css('.ingredient'));
  }

  getInstructions() {
    return element(by.css('.instructions'));
  }

  getGlass() {
    return element(by.css('.glass'));
  }
}
