import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/core/auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path: 'home',
    component: AppLayoutComponent,
    loadChildren: () => import('src/app/features/home/home.module').then((m)=> m.HomeModule)
  },
  {
    path: 'items',
    component: AppLayoutComponent,
    loadChildren: () => import('src/app/features/items/items.module').then((m)=> m.ItemsModule)
  },
  {
    path: 'card',
    component: AppLayoutComponent,
    loadChildren: () => import('src/app/features/card-wishlist/card-wishlist.module').then((m)=> m.CardWishlistModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
