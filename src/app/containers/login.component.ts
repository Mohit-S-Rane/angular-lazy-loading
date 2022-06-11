import {Component} from '@angular/core';
import {ApiService} from '../modules/core/services/api-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div fxLayoutAlign="center center">
      <button color="primary" mat-raised-button (click)="login()">login</button>
    </div>
  `,
  styles: [``]
})

export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router) {
  }

  login() {
    this.apiService.login().subscribe(data => {
      localStorage.setItem('role', (data as any).role);
    });
    this.router.navigate(['user/home']);
  }
}
