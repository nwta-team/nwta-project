import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/data/schema/meal';
import { MealApiService } from 'src/app/data/service/meal-api.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../../data/service/firestore.service';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  meal: Meal;
  currentUser: firebase.User;

  constructor(private mealApiService: MealApiService, private route: ActivatedRoute,
              private firestoreService: FirestoreService, public auth: AuthService) {
  }

  ngOnInit(): void {
    this.getMeal();
    this.auth.getUserState().subscribe(user => {
      this.currentUser = user;
    });
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
    this.firestoreService.addMealsToFavourites(this.meal.idMeal, this.currentUser.uid, this.meal.strMeal);
  }
}
