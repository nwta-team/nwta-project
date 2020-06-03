import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { FavDrink } from '../schema/drink';
import { FavMeal } from '../schema/meal';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private auth: AuthService, private fireStore: AngularFirestore, private fireAuth: AngularFireAuth, private snackBar: MatSnackBar) {
  }

  addDrinksToFavourites(drinkID: string, userID: string, drinkName: string) {
    if(userID !== null)
    {
      const newId = this.fireStore.createId();
      const data = {
        userid : userID,
        drinkid : drinkID,
        drinkname : drinkName
      }
      this.fireStore.collection("favDrinks").doc(newId).set(data)
      .then(() => this.snackBar.open('Drink added to favourites', 'Close'), () => this.snackBar.open('There was an error processing your request! Try again later.', 'Close'));  
    }else{
      this.snackBar.open('You need to log in for this feature!', 'Close');
    }
  }

  addMealsToFavourites(mealID: string, userID: string, mealName: string) {
    if(userID !== null)
    {
      const newId = this.fireStore.createId();
      const data = {
        userid : userID,
        mealid : mealID,
        mealname : mealName
      }
      this.fireStore.collection("favMeals").doc(newId).set(data)
      .then(() => this.snackBar.open('Meal added to favourites', 'Close'), () => this.snackBar.open('There was an error processing your request! Try again later.', 'Close'));  
    }else{
      this.snackBar.open('You need to log in for this feature!', 'Close');
    }
  }

  getFavouriteDrinks(userID: string) : Observable<FavDrink[]>
  {
    return this.fireStore.collection<FavDrink>("favDrinks", ref => ref.where('userid', "==", userID)).valueChanges();
  }

  getFavouriteMeals(userID: string) : Observable<FavMeal[]>
  {
    return this.fireStore.collection<FavMeal>("favMeals", ref => ref.where('userid', "==", userID)).valueChanges();
  }
}
