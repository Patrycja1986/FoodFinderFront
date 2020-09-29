import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
show = true;
 restaurants: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get('http://localhost:8080/restaurants')
        .toPromise()
        .then((res) => {this.restaurants = res; });
    }

  // tslint:disable-next-line:typedef
    toggle(){
    this.show = false;
    }
}
