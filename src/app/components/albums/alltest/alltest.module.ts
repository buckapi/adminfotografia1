import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlltestRoutingModule } from './alltest-routing.module';
import { AlltestComponent } from './alltest.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AlltestComponent
  ],
  imports: [
    CommonModule,
    NgxUiLoaderModule,
    AlltestRoutingModule
  ]
})
export class AlltestModule { }
