import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantlistService {

  constructor( private http:HttpClient ) { }

  showRestaurants()
  {
    return this.http.get("http://localhost:8082/multicuisine/restaurant/list");
  }

  


}
