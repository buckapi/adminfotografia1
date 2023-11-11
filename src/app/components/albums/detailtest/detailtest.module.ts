import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailtestRoutingModule } from './detailtest-routing.module';
import { DetailtestComponent } from './detailtest.component';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailtestComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DetailtestRoutingModule, SweetAlert2Module.forRoot()
  ]
})
export class DetailtestModule { }
