import { Component, OnInit } from '@angular/core';
import { CoctailApiService } from '../../../data/service/coctail-api.service';

@Component({
  selector: 'app-tab-two',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  randomThreeDrinks = [];

  constructor(private coctailApiService: CoctailApiService) {
  }

  ngOnInit(): void {
    this.getRandomThreeDrinks();
  }

  getRandomThreeDrinks() {
    for (let i = 0; i < 3; i++) {
      this.coctailApiService.getRandomDrink()
        .subscribe(drinkObj => {
          this.randomThreeDrinks.push(drinkObj.drinks[0]);
        });
    }
  }

  checkIfArrayContainsDrinks(drinkObj) {
    return this.randomThreeDrinks.find(drinkElement => drinkElement.drinks[0].idDrink !== drinkObj.drinks[0].idDrink);
  }

  refreshDrinks() {
    this.randomThreeDrinks = [];
    this.getRandomThreeDrinks();
  }

  loadMoreDrinks() {
    this.getRandomThreeDrinks();
  }
}
