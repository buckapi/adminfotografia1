import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import { UploaderCaptions } from 'ngx-awesome-uploader';

import { Yeoman } from '@services/yeoman.service';

import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements AfterViewInit {
  @ViewChild('deleteSwal')
 

  category:any;
  // products$:any={};
  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Imágenes del servicio',
      or: '.',
      browse: 'Cargar',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };
  data = {
    images: [] as string[], // o cualquier otro tipo de dato adecuado, como any[]
    name: '',
    subname: '',
    description1: '',
    description2: '',
    description3: '',
    ref: '',
    itemServices: [{item:'' }]
  /*   package:'' */
  };
 
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService
    ) { 
      this._butler.data=this.data;}
      onSubmit() {
        this.data.ref = (Math.floor(Math.random() * 10000000000000)).toString();
        this.data.images=this._butler.uploaderImages;
        this.dataApiService.saveCategory(this.data).subscribe(response=>{
          console.log(response);
          // this.getAll();
          this._butler.uploaderImages=[];
          this.router.navigate(['servAll']);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Guardado',
            showConfirmButton: false,
            timer: 1500
          })
         
          //  this.getProducts();
        });
        // Aquí puedes enviar los datos al servidor o realizar las acciones necesarias
        console.log(this.data);
        
        }
        addItemService() {
          this.data.itemServices.push({item:''});
        }
    ngAfterViewInit(): void {
  }

}
