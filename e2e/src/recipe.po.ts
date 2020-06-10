import { browser, by, element } from 'protractor';

export class Recipe {
  navigateTo() {
    return browser.get('/foods/52819');
  }

  getMealImage() {
    return element(by.css('.mealPhoto'));
  }

  getMealMeasure() {
    return element.all(by.css('.measure'));
  }

  getMealIngredients() {
    return element.all(by.css('.ingredient'));
  }

  getMealInstructions() {
    return element(by.css('.allinstruction'));
  }

   // opis w spec
  // getMealTitle() {
   // return element(by.id('.mealtitle')).getText();
  // }

}
