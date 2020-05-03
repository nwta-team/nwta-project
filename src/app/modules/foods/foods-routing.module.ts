import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsComponent } from './page/foods.component';
import { RandomPageComponent } from './random-page/random-page.component';

const routes: Routes = [
  {
    path: '',
    component: FoodsComponent,
  },
  { path: 'random', component: RandomPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule {}
