import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {OrderService} from '../services/order.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  @Input() mealItem: any;
  // tslint:disable-next-line:new-parens
/* @Output() mealSelected: any = new EventEmitter<void>();*/

  constructor(private http: HttpClient, private orderService: OrderService) {
  }
  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  handleAddToCart() {
   this.orderService.addProductToCard(this.mealItem);
  }
}
