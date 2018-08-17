import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from '../courses-list/courses-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesListComponent],
  exports: [CoursesListComponent]
})
export class CoursesModule { }
