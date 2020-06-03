import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  getUserState() {
    return this.auth.authState;
  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['auth/login']));
  }
}
