import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSubpageComponent } from './drink-subpage.component';

describe('DrinkSubpageComponent', () => {
  let component: DrinkSubpageComponent;
  let fixture: ComponentFixture<DrinkSubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkSubpageComponent ]
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
