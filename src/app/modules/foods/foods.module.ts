import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsComponent } from './page/foods.component';
import { FoodsRoutingModule } from './foods-routing.module';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [FoodsComponent, RecipeComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule
  ]
})
export class FoodsModule {
}
