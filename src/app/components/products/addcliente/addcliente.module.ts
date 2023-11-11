import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddclienteRoutingModule } from './addcliente-routing.module';
import { AddclienteComponent } from './addcliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';

@NgModule({
  declarations: [
    AddclienteComponent
  ],
  imports: [
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    AddclienteRoutingModule,FormsModule
  ],exports:[FilePickerModule]
})
export class AddclienteModule { }
