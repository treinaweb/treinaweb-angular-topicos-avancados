import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './views/list/list.component';
import { MyNumberPipe } from '../../pipes/my-number.pipe';
import { InformationComponent } from './views/information/information.component';


const CompList = [
  ListItemComponent,
  ListComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PokedexRoutingModule
  ],
  declarations: [
    ...CompList,
    MyNumberPipe,
    InformationComponent
  ],
  exports: [
    ...CompList
  ]
})
export class PokedexModule { }
