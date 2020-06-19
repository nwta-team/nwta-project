import { Component } from '@angular/core';
import { AuthProvider, Theme } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  providers = AuthProvider;
  themes = Theme;

  constructor(private router: Router) {
  }

  redirectToProfile() {
    this.router.navigate(['profile']);
  }
}
