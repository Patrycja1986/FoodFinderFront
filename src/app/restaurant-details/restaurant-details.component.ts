import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: any;
  restaurantId: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.restaurantId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:8080/restaurants/${(this.restaurantId)}`)
      .subscribe((data: any) => {
        console.log(data);
        this.restaurant = data;
      });
}
}
