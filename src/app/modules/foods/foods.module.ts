import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './page/foods.component';
import { FoodsRoutingModule } from './foods-routing.module';
import { RandomPageComponent } from './random-page/random-page.component';



@NgModule({
  declarations: [FoodsComponent, RandomPageComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule
  ]
})
export class FoodsModule { }
