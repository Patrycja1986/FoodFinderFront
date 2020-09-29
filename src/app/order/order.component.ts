import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedMeals: any = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getProduct().subscribe(product => {
      console.log(product);
      // @ts-ignore
      this.orderedMeals.push(product);
    });
  }

}
