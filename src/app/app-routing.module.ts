import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantDetailsComponent} from './restaurant-details/restaurant-details.component';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {MealDetailsComponent} from './meal-details/meal-details.component';
import {LogInComponent} from './log-in/log-in.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'restaurants/:id', component: RestaurantDetailsComponent},
 /* {path: 'restaurants/:id/meal/:id', component: MealDetailsComponent},*/
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
