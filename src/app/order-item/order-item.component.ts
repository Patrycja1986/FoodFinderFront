import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() mealItem: any;
  constructor() {
  }
  ngOnInit(): void {
  }
}
