import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],

  animations: [
    trigger('listItemState', [
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      transition(':enter', [
        style({
          transform: 'translateX(-50%)'
        }),
        animate(300)
      ]),
      transition(':leave', style({
        transform: 'translateX(30%)',
        opacity: 0
      }))
    ])
  ]
})
export class ListItemComponent implements OnInit {
  @Input() pokemon: any;

  constructor() { }

  ngOnInit() {
  }

}
