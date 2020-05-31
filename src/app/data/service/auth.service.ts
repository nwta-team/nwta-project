import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['auth/login']));
  }
}
