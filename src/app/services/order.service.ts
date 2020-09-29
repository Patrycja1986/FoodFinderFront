import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  subject = new Subject();
  constructor() { }
  // tslint:disable-next-line:typedef
  sendProduct(product){
    this.subject.next(product);
  }
  // tslint:disable-next-line:typedef
  getProduct(){
    return this.subject.asObservable();
  }
}
