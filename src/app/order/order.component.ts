import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {OrderService} from '../services/order.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedMeals: any = [];
  price: any;
  total: any;
  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getProduct().subscribe(product => {
      console.log(product);
      console.log(this.orderedMeals);
      // tslint:disable-next-line:no-shadowed-variable
      this.orderedMeals.push(product);
      console.log(this.orderedMeals);
      this.total = 0;
      // tslint:disable-next-line:no-shadowed-variable
      this.orderedMeals.map(a => { this.price = a.mealPrice; console.log(this.price); }).forEach(product => {
        this.total += this.price;
      });
      console.log(this.orderedMeals);
      /*this.getTotal();*/
      });
  }
  // tslint:disable-next-line:typedef
  getTotal(){
    return this.orderedMeals.map(a => { this.price = a.mealPrice; console.log(this.price); }).forEach(product => {
      this.total += this.price;
  });
  }
}
