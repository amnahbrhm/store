import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    pathMatch: 'full'
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  declarations: [
    CardComponent,
    WishlistComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CardWishlistModule { }
