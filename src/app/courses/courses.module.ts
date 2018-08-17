import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesListComponent],
  exports: [CoursesListComponent]
})
export class CoursesModule { }
