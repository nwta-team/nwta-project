import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSubpageComponent } from './drink-subpage.component';
import { AngularFireModule } from '@angular/fire';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { from, Observable } from 'rxjs';

describe('DrinkSubpageComponent', () => {
  let component: DrinkSubpageComponent;
  let fixture: ComponentFixture<DrinkSubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule,
        MatSnackBarModule
      ],
      declarations: [DrinkSubpageComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: from([{id: 13377}])
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
