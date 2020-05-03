import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'foods',
        loadChildren: () => import('./modules/foods/foods.module').then(m => m.FoodsModule)
      },
      {
        path: 'drinks',
        loadChildren: () => import('./modules/drinks/drinks.module').then(m => m.DrinksModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact-form.module').then(m => m.ContactFormModule)
      },
    ]
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
