import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {

    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        const token = window.localStorage.getItem('auth_token');
        if (!token) {
          this.router.navigate(['/signin']);
          return false //不能继续导航
        }
        return true;
  }
}