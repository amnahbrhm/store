import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsRoutingModule } from './items-routing.module';



@NgModule({
  declarations: [
    ItemListComponent,
    ItemViewComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  exports: [
  ]
})
export class ItemsModule { }
