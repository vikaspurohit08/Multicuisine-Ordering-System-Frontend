import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupaddressComponent } from './signupaddress/signupaddress.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { FooditemlistComponent } from './fooditemlist/fooditemlist.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { ModifyrestaurantComponent } from './modifyrestaurant/modifyrestaurant.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ManagecustomersComponent } from './managecustomers/managecustomers.component';
import { BlockComponent } from './block/block.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{path: "signup", component: SignupComponent },
       {path: "login", component: LoginComponent },
      {path : "" , component:LoginComponent },
      {path : "address" , component: SignupaddressComponent },
      {path : "restaurants" , component: RestaurantlistComponent },
      {path : "fooditems" , component: FooditemlistComponent },
      {path : "cart" , component: CartComponent },
      {path : "history" , component: HistoryComponent },
      {path : "addrestaurant" , component: AddrestaurantComponent },
      {path : "modifyrestaurant" , component: ModifyrestaurantComponent },
      {path : "orders" , component: ViewordersComponent } ,
      {path : "managecustomers" , component: ManagecustomersComponent } ,
      {path : "block" , component: BlockComponent } 
      ])],
         exports: [RouterModule]
})
export class AppRoutingModule { }
