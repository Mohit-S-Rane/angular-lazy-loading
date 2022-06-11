import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class UserGuard implements CanActivateChild {
  constructor(private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const role = localStorage.getItem('role');
    if (role === 'user') {
      return true;
    } else {
      this.router.navigate(['admin/home']);
    }
  }
}
