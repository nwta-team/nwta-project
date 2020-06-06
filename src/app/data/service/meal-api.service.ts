import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meals } from '../schema/meal';

@Injectable({
  providedIn: 'root'
})

export class MealApiService {

  constructor(private http: HttpClient) {
  }

  getRandomMeal(): Observable<Meals> {
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    return this.http.get<Meals>(randomMealUrl);
  }

  getMealById(id): Observable<Meals> {
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
    return this.http.get<Meals>(randomMealUrl);
  }
}
