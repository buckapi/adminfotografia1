import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditclienteRoutingModule } from './editcliente-routing.module';
import { EditclienteComponent } from './editcliente.component';
import { FormsModule } from '@angular/forms';
import { FilePickerModule } from 'ngx-awesome-uploader';


@NgModule({
  declarations: [
    EditclienteComponent
  ],
  imports: [
    CommonModule,
    EditclienteRoutingModule,
    FormsModule,
    FilePickerModule
  ]
})
export class EditclienteModule { }
