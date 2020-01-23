import { Component, OnInit } from '@angular/core';
import { RestaurantlistService } from '../restaurantlist.service'

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {

  constructor(private restaurantlistservice:RestaurantlistService ) { }
  restaurants:any;
  noofcol = 0;

  ngOnInit() {
    console.log("restaurant list loaded");
    let restaurants = this.restaurantlistservice.showRestaurants();
    
    restaurants.subscribe((data)=>{
    this.restaurants = data;
    })
  }

  checknoofcol()
  {
    return this.noofcol<=4;
  }

  addnoofcol()
  {
    if(this.noofcol <= 4)
    {
    this.noofcol = this.noofcol + 1;
    }
    else
    {
      this.noofcol = 0;
    }
  }

  
  
}
