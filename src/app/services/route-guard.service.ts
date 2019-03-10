import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {HardCodeAuthenticationService} from "./hard-code-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodeAuthenticationService.isUserLoggedIn())
      return true;
    return this.router.navigate(['login']);
    return false;
  }

  constructor(private hardCodeAuthenticationService: HardCodeAuthenticationService,private router:Router) {
  }
}
