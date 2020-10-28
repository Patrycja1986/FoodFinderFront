import {Component, Injectable, OnInit, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {OrderItem} from '../order-item/order-item';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  meals: any = [];
  restaurantId: any;
/* @Output() mealSelectedToOrder: any = new EventEmitter<any>();*/

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.restaurantId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:8080/meals/restaurant/${(this.restaurantId)}`)
      .subscribe((data: any) => {
        console.log(data);
        this.meals = data;
      });
}

  // tslint:disable-next-line:typedef
  /*onSelected(item: any) {
    this.mealSelectedToOrder.emit(item);
  }*/
}
