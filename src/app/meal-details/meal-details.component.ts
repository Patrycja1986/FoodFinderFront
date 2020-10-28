import {Component, OnInit, Input} from '@angular/core';
import {OrderService} from '../services/order.service';
import {HttpClient} from '@angular/common/http';
import {OrderItem} from '../order-item/order-item';
import {MealItem} from './meal-item';


@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  // tslint:disable-next-line:new-parens
/* @Output() mealSelected: any = new EventEmitter<void>();*/

  constructor(private http: HttpClient, private orderService: OrderService) {
  }
  @Input() mealItem: MealItem;
  // tslint:disable-next-line:typedef
  mealQuantity: string;
  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  handleAddToCart(value: any) {
    this.mealQuantity = value;
    // tslint:disable-next-line:radix
    parseInt(this.mealQuantity);
    this.orderService.addProductToCard(this.mealItem, this.mealQuantity);
  }
}
