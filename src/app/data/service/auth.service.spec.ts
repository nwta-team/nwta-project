import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule,
      ]
    })
      .compileComponents();
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
