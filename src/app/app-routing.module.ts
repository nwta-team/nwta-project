import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { DrinkSubpageComponent } from './modules/drinks/page/drink-subpage/drink-subpage.component';
import { RecipeComponent } from './modules/foods/recipe/recipe.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['profile']);

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
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
        path: 'recipe/:id',
        loadChildren: () => import('./modules/foods/foods.module').then(m => m.FoodsModule),
        component: RecipeComponent
      },
      {
        path: 'drinks',
        loadChildren: () => import('./modules/drinks/drinks.module').then(m => m.DrinksModule)
      },
      {
        path: 'drink/:id',
        loadChildren: () => import('./modules/drinks/drinks.module').then(m => m.DrinksModule),
        component: DrinkSubpageComponent
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact-form.module').then(m => m.ContactFormModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
        ...canActivate(redirectUnauthorizedToLogin),
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
