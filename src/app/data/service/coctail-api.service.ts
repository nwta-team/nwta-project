import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drinks } from '../schema/drink';

@Injectable({
  providedIn: 'root'
})

export class CoctailApiService {

  constructor(private http: HttpClient) {
  }

  getRandomDrink(): Observable<Drinks> {
    const randomDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    return this.http.get<Drinks>(randomDrinkUrl);
  }

  getDrinkById(id): Observable<Drinks> {
    const randomDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;
    return this.http.get<Drinks>(randomDrinkUrl);
  }
}
