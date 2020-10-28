import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-animation-module',
  templateUrl: './animation-module.component.html',
  styleUrls: ['./animation-module.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide =>show', animate('1000ms ease-in'))
    ])
  ]
})
export class AnimationModuleComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  get stateName(){
    return this.show ? 'show' : 'hide';
  }
  // tslint:disable-next-line:typedef
  toggle(){
    this.show = !this.show;
  }

}
