import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoctailApiService } from '../../../../data/service/coctail-api.service';
import { Drink } from '../../../../data/schema/drink';

@Component({
  selector: 'app-drink-subpage',
  templateUrl: './drink-subpage.component.html',
  styleUrls: ['./drink-subpage.component.scss']
})
export class DrinkSubpageComponent implements OnInit {

  drink: Drink;

  constructor(private coctailApiService: CoctailApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDrink();
  }

  getDrink() {
    const id = this.getDrinkId();
    this.coctailApiService.getDrinkById(id).subscribe(drink => {
      this.drink = drink.drinks[0];
      console.log(this.drink);
    });
  }

  getDrinkId() {
    let id = '';
    this.route.params.subscribe(params => {
      id = params.id;
    });
    return id;
  }
}
