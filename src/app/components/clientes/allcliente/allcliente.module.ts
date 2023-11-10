import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllclienteRoutingModule } from './allcliente-routing.module';
import { AllclienteComponent } from './allcliente.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AllclienteComponent
  ],
  imports: [
    CommonModule,
    NgxUiLoaderModule,
    AllclienteRoutingModule
  ]
})
export class AllclienteModule { }
