import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoctailApiService } from '../../../../data/service/coctail-api.service';
import { Drink } from '../../../../data/schema/drink';
import { AuthService } from '../../../../data/service/auth.service';
import { FirestoreService } from '../../../../data/service/firestore.service';

@Component({
  selector: 'app-drink-subpage',
  templateUrl: './drink-subpage.component.html',
  styleUrls: ['./drink-subpage.component.scss']
})
export class DrinkSubpageComponent implements OnInit {

  drink: Drink;
  currentUser: firebase.User;

  constructor(private coctailApiService: CoctailApiService, private route: ActivatedRoute,
              public auth: AuthService, private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.getDrink();
    this.auth.getUserState().subscribe(user => {
      this.currentUser = user;
    });
  }

  getDrink() {
    const id = this.getDrinkId();
    this.coctailApiService.getDrinkById(id).subscribe(drink => {
      this.drink = drink.drinks[0];
    });
  }

  getDrinkId() {
    let id = '';
    this.route.params.subscribe(params => {
      id = params.id;
    });
    return id;
  }

  addDrinkToFavourites() {
    this.firestoreService.addDrinksToFavourites(this.drink.idDrink, this.currentUser.uid, this.drink.strDrink);
  }
}
