import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {HttpClientModule} from '@angular/common/http';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { HomeComponent } from './home/home.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { OrderComponent } from './order/order.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import {FormsModule} from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { OrderItemComponent } from './order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    HomeComponent,
    MealListComponent,
    OrderComponent,
    MealDetailsComponent,
    LogInComponent,
    RegisterComponent,
    OrderItemComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
