import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcategoryRoutingModule } from './editcategory-routing.module';
import { EditcategoryComponent } from './editcategory.component';

import { FilePickerModule } from  'ngx-awesome-uploader';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditcategoryComponent
  ],
  imports: [
    FilePickerModule,
    CommonModule,
    FormsModule,
    EditcategoryRoutingModule
  ]
})
export class EditcategoryModule { }
