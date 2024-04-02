import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';

import { EdittestRoutingModule } from './edittest-routing.module';
import { EdittestComponent } from './edittest.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EdittestComponent
  ],
  imports: [
    CommonModule,
    EdittestRoutingModule,
    FormsModule
  ]
})
export class EdittestModule { }
