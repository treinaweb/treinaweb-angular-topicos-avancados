import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanLoad, Route } from '@angular/router';

import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, CanDeactivate<AppComponent>, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      console.log(next, state)
    return false;
  }

  canDeactivate(
    component: AppComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    console.log(component, next, state);
    return false;
  }

  canLoad(
    route: Route
  ): boolean{
    return false;
  }
}
