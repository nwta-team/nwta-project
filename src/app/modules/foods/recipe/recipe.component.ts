import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/data/schema/meal';
import { MealApiService } from 'src/app/data/service/meal-api.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../../data/service/firestore.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  meal: Meal;

  constructor(private mealApiService: MealApiService, private route: ActivatedRoute, private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal() {
    const id = this.getMealId();
    this.mealApiService.getMealById(id).subscribe(meal => {
      this.meal = meal.meals[0];
      console.log(this.meal);
    });
  }

  getMealId() {
    let id = '';
    this.route.params.subscribe(params => {
      id = params.id;
    });
    return id;
  }

  addMealToFavourites() {
    this.firestoreService.addMealsToFavourites(this.meal.idMeal);
  }
}
