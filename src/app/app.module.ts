import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupaddressComponent } from './signupaddress/signupaddress.component';

import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { FooditemlistComponent } from './fooditemlist/fooditemlist.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SignupaddressComponent,
    RestaurantlistComponent,
    FooditemlistComponent,
    CartComponent,
    HistoryComponent,
    AddrestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
