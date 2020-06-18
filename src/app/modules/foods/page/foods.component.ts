import { Component, OnInit } from '@angular/core';
import { MealApiService } from '../../../data/service/meal-api.service';

@Component({
  selector: 'app-tab-one',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  randomMeal = [];

  constructor(private mealApiService: MealApiService) {
  }

  ngOnInit(): void {
    this.getFiveRandomMeals();
  }

  getFiveRandomMeals() {
    for (let i = 0; i < 5; i++) {
      this.getRandomMeal();
    }
  }

  loadMoreMeals() {
    this.getRandomMeal();
  }

  getRandomMeal() {
    this.mealApiService.getRandomMeal()
      .subscribe(mealObj => this.randomMeal.push(mealObj.meals[0]));
  }

  refreshMeals() {
    this.randomMeal = [];
    this.getFiveRandomMeals();
  }
}
