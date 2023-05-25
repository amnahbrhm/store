import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsRoutingModule } from './items-routing.module';


import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    ItemListComponent,
    ItemViewComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ButtonModule,
    PanelModule
  ],
  exports: [
  ]
})
export class ItemsModule { }
