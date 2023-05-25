import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
