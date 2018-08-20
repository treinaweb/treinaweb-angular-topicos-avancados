import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesListComponent } from '../courses-list/courses-list.component';

@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, CanDeactivate<CoursesListComponent> {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      console.log(next, state)
    return false;
  }

  canDeactivate(
    component: CoursesListComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    console.log(component, next, state);
    return false;
  }
}
