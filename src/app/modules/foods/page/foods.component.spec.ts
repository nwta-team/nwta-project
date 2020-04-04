import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsComponent } from './foods.component';

describe('TabOneComponent', () => {
  let component: FoodsComponent;
  let fixture: ComponentFixture<FoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
