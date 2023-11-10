import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtestRoutingModule } from './addtest-routing.module';
import { AddtestComponent } from './addtest.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FilePickerModule } from  'ngx-awesome-uploader';

@NgModule({
  declarations: [
    AddtestComponent
  ],
  imports: [
    FilePickerModule,
    HttpClientModule,
     CommonModule,
    AddtestRoutingModule,FormsModule
  ],exports:[FilePickerModule]
})
export class AddtestModule { }
