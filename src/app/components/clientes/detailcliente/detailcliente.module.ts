import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailclienteRoutingModule } from './detailcliente-routing.module';
import { DetailclienteComponent } from './detailcliente.component';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailclienteComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DetailclienteRoutingModule, SweetAlert2Module.forRoot()
  ]
})
export class DetailclienteModule { }
