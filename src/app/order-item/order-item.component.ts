import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Output()orderItem;
  meal: any;
  name: any;
  price: any;
  quantity: any;
  summary: any;
  constructor(private orderService: OrderService) {
  }
  ngOnInit(): void {
    this.orderService.getQuantity().subscribe(data => {
      this.quantity = data;
      console.log(this.quantity);
    });
    this.orderService.getMeal().subscribe(product  => {
      /*this.summary = 0;
      this.summary = this.price * this.quantity;*/
      // tslint:disable-next-line:no-shadowed-variable
    /*  this.orderedMeals.map(a => { this.price = a.mealPrice; }).forEach(product => {
        this.total += this.price * this.quantity;*/
      });
   /* this.meal.map(meal => {
      this.price = meal.mealPrice;
      this.name = meal.mealName;
      this.summary = 0;
      this.summary = this.price * this.quantity;
    } );*/
   /* this.createOrderItem(this.name, this.price, this.quantity, this.summary);
    console.log(this.orderItem);
    this.outputFromChild.emit(this.orderItem);*/
  }
  // tslint:disable-next-line:typedef
 /* createOrderItem( name: any, price: any, quantity: any, summary: any){
    return this.orderItem = new OrderItem(name, price, quantity, summary);
  }*/
}
