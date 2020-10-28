import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {isHiddenFromScreenReader} from 'codelyzer/util/isHiddenFromScreenReader';

// @ts-ignore
@Component({
  selector: 'app-photo-gallery-component',
  templateUrl: './photo-gallery-component.component.html',
  styleUrls: ['./photo-gallery-component.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style(
        {transform: 'translateX(0) translateY(0)'
      })),
     state('hide', style({
       opacity : 0,
     })),
      transition('*=>*', animate('10000ms', keyframes([
      style({transform: 'translateX(0)  rotateY(0)', offset: 0}),
        style({transform: 'translateX(1000%)  rotateY(0)', offset: 1}),
       /* style({opacity: 0, offset: 1})*/
      ]))),
    ])
  ]
})
export class PhotoGalleryComponentComponent implements OnInit {

  constructor() { }
  position: string;
  photoUrl = 'https://marutiprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-profile-shots/full-range-side-shot.ashx?modified=20181217042135&h=342&w=500&la=en&hash=821C3E5E1634D214529113B55002D04E7826D57F';

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  changePosition(newPosition: string){
    this.position = newPosition;
  }

}
