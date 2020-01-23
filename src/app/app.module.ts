import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupaddressComponent } from './signupaddress/signupaddress.component';
import { FormsModule } from '@angular/forms'
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { FooditemlistComponent } from './fooditemlist/fooditemlist.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { ModifyrestaurantComponent } from './modifyrestaurant/modifyrestaurant.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ManagecustomersComponent } from './managecustomers/managecustomers.component';
import { BlockComponent } from './block/block.component';
import { HttpClientModule } from '@angular/common/http';



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
    AddrestaurantComponent,
    ModifyrestaurantComponent,
    ViewordersComponent,
    ManagecustomersComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
