import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  subject = new Subject();
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  addProductToCard(product){
    this.subject.next(product);
  }
  // tslint:disable-next-line:typedef
  getProduct(){
    return this.subject.asObservable();
  }
}
