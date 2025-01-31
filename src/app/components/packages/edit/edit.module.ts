import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { FilePickerAdapter, FilePickerModule } from 'ngx-awesome-uploader';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    FilePickerModule
  ]
})
export class EditModule { }
