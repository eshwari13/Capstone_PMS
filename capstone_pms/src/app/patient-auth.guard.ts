import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './module/patient/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatientAuthGuard implements CanActivate {
 


  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    console.log("inside canactivate" + this.authService.isAuthenticated());

    // navigate to login page
    this.router.navigate(['patient/login']);
    return false;
  }
  
}
