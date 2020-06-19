import { browser, by, element } from 'protractor';

export class DrinksPage {
  navigateTo() {
    return browser.get('/drinks');
  }

  getDrinksLogo() {
    return element(by.css('.drinkLogoWrongElement'));
  }

  getTitleText() {
    return element(by.css('.title')).getText();
  }

  getWelcomeText() {
    return element(by.css('.welcomeText')).getText();
  }

  getThreeDrinks() {
    return element.all(by.css('.randomDrinkPic'));
  }

  getDrink() {
    return element(by.css('.randomDrinkPic'));
  }
}
