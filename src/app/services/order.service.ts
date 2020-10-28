import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  mealSubject = new Subject();
  quantitySubject = new Subject();
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
    addProductToCard(product, mealQuantity){
    // @ts-ignore
      this.mealSubject.next(product);
      this.quantitySubject.next(mealQuantity);
  }
  // tslint:disable-next-line:typedef
  getMeal(){
    return this.mealSubject.asObservable();
  }
  // tslint:disable-next-line:typedef
  getQuantity(){
    return this.quantitySubject.asObservable();
  }
}
