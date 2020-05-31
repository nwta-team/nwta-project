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
    this.getRandomMeal();
  }

  getRandomMeal() {
    for (let i = 0; i < 5; i++) {
      this.mealApiService.getRandomMeal()
        .subscribe(mealObj => this.randomMeal.push(mealObj.meals[0]));
    }
  }
}
