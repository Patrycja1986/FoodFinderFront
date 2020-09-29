import { Component, OnInit, Input } from '@angular/core';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  @Input() mealItem: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  handleAddToCart(){
    this.orderService.sendProduct(this.mealItem);
  }

}
