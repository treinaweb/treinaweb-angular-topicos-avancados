import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationGuard implements CanActivate {

  constructor(
    private router: Router
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const number = parseInt(next.params['number'], 10);
    if(number > 0 && number <= 710){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }
}
