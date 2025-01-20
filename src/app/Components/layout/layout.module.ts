import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../Reutilizable/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
