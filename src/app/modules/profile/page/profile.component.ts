import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../data/service/auth.service';
import { FavMeal } from 'src/app/data/schema/meal';
import { FavDrink } from 'src/app/data/schema/drink';
import { FirestoreService } from 'src/app/data/service/firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private firestoreService: FirestoreService) {
  }

  currentUser: firebase.User;

  favMeals: FavMeal [] = [];
  favDrinks: FavDrink [] = [];


  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.currentUser = user;

      this.firestoreService.getFavouriteMeals(this.currentUser.uid).subscribe(
        data => {
          this.favMeals = data;
        }
      );

      this.firestoreService.getFavouriteDrinks(this.currentUser.uid).subscribe(
        data => {
          this.favDrinks = data;
        }
      );
    });
  }

  removeMealFromFavourites(mealid: string) {
    if (confirm('Are you sure you want to remove this meal from your favourites?')) {
      this.firestoreService.deleteMealFromFavourites(this.currentUser.uid, mealid);
    }
  }

  removeDrinkFromFavourites(drinkid: string) {
    if (confirm('Are you sure you want to remove this drink from your favourites?')) {
      this.firestoreService.deleteDrinkFromFavourites(this.currentUser.uid, drinkid);
    }
  }

  onLogoutClick() {
    this.auth.logout();
  }
}
