import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantDetailsComponent} from './restaurant-details/restaurant-details.component';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'restaurants/:id', component: RestaurantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
