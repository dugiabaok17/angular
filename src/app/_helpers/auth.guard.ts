import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (window.sessionStorage.getItem('auth-user') !== null) {
      const role = route.data['roles'] as Array<string>;

      console.log('check role ', role)
      if (role) {
        const jsonObject = JSON.parse(window.sessionStorage.getItem('auth-user') || '')
        let isMatch = false;
        const userRoles: any = jsonObject.roles;

        if (userRoles != null && userRoles) {

          for (let i = 0; i < userRoles.length; i++) {
            for (let j = 0; j < role.length; j++) {
              if (userRoles[i] === role[j]) {
                
                isMatch = true;
              } 
            }
          }
        }
        if (isMatch) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
