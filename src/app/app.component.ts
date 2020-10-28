import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
showHomeContent = true;
  // tslint:disable-next-line:typedef
  closeHomeContent() {
    return this.showHomeContent = false ;
  }
}
