import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditclienteRoutingModule } from './editcliente-routing.module';
import { EditclienteComponent } from './editcliente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditclienteComponent
  ],
  imports: [
    CommonModule,
    EditclienteRoutingModule,
    FormsModule
  ]
})
export class EditclienteModule { }
