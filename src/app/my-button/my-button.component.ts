import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  animations: [
    trigger('btnState', [
      state('inactive', style({
        backgroundColor: 'gray',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'green',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('listState', [
      state('in', style({transform: 'translateX()0', opacity: 1})),
      transition('void => *', [
        style({
          transform: 'translateX(-50%)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(30%)',
          opacity: 0
        }))
      ])
    ]),

    trigger('listOpen', [
      state('open', style({
        height: '*'
      })),
      state('closed', style({
        height: 0
      })),
      transition('open <=> closed', animate('800ms cubic-bezier(0.680, -0.550, 0.265, 1.550)'))
    ])
  ]
})
export class MyButtonComponent implements OnInit {
  myState = 'active';
  myList = [];
  myListState = 'open';

  constructor() { }

  ngOnInit() {
  }

  toggleState(){
    this.insertItem();
    this.myState = this.myState === 'active' ? 'inactive' : 'active';
  }

  toggleListState(){
    this.myListState = this.myListState === 'open' ? 'closed' : 'open';
  }

  insertItem(){
    this.myList.push(this.myList.length);
  }

  removeItem(index){
    this.myList.splice(index, 1);
  }



}
