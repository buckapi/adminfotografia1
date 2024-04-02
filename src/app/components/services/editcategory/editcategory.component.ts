import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  category:any;
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

  };
 
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);

  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman: Yeoman
  ) { 
   
      this.data=this.yeoman.preview;
    }
    cancelarUpdate(){
      this.router.navigate(['/servAll']);
    }
      onSubmit() {
        if (this._butler.uploaderImages.length > 0) {
          this.data.images = this._butler.uploaderImages;
           }
           this.dataApiService.categoryUpdate(this.data, this.yeoman.preview.id).subscribe(response => {
               console.log(response);
               this.router.navigate(['servAll']);
               this.data = {
                images: [] as string[], // o cualquier otro tipo de dato adecuado, como any[]
                name: '',
                subname: '',
                description1: '',
                description2: '',
                description3: '',
                ref: '',
                itemServices: [{item:'' }]
               };
               this._butler.uploaderImages = [];
               Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Servicio Actualizado',
                   showConfirmButton: false,
                   timer: 1500
               });
           });
         // Aquí puedes enviar los datos al servidor o realizar las acciones necesarias
         console.log(this.data);       
        }
  ngOnInit(): void {
  }

}
