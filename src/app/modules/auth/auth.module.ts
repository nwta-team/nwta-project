import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxAuthFirebaseUIModule.forRoot({
        apiKey: 'AIzaSyBLJN52Lhvot3BwYGRnJAVCXn5jfUpo4-U',
        authDomain: 'nwta-project.firebaseapp.com',
        databaseURL: 'https://nwta-project.firebaseio.com',
        projectId: 'nwta-project',
        storageBucket: 'nwta-project.appspot.com',
        messagingSenderId: '855719245408',
      },
      () => '',
      {
        authGuardFallbackURL: 'auth/login',
        authGuardLoggedInURL: 'profile',
        passwordMinLength: 7,
        guardProtectedRoutesUntilEmailIsVerified: false,
        enableEmailVerification: false,
      }),
  ]
})
export class AuthModule {
}
