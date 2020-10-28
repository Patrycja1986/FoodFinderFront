import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {OrderService} from '../services/order.service';
import {OrderItem} from '../order-item/order-item';
import {MealItem} from '../meal-details/meal-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedMeals: any = [];
  meal: MealItem;
  quantity: any;
  orderItem: OrderItem;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getQuantity().subscribe(data => {
      this.quantity = data;
      (console.log(this.quantity));
    });
    this.orderService.getMeal().subscribe((product: any) => {
      this.meal = product;
      this.orderItem = new OrderItem(this.meal, this.quantity);
      this.orderedMeals.push(this.orderItem);
      console.log(this.orderItem);
    });
  }
}
