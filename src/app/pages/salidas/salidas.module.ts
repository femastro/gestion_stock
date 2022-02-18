import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalidasRoutingModule } from './salidas-routing.module';
import { SalidasComponent } from './salidas.component';


@NgModule({
  declarations: [
    SalidasComponent
  ],
  imports: [
    CommonModule,
    SalidasRoutingModule
  ]
})
export class SalidasModule { }
