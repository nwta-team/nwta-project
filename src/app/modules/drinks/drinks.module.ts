import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinksComponent } from './page/drinks.component';
import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinkSubpageComponent } from './page/drink-subpage/drink-subpage.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [DrinksComponent, DrinkSubpageComponent],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    SharedModule
  ]
})
export class DrinksModule { }
