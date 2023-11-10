import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { Yeoman } from '@services/yeoman.service';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements AfterViewInit {
  
  @ViewChild('deleteSwal')
  category='Seleccione una';
  categorySeted:boolean=false;
   integration:any={}; 
   products$:any={};
   public captions: UploaderCaptions = {
     dropzone: {
       title: 'Imágenes del producto',
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
    ref: '',
   
  };

  
 
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman:Yeoman
    ) {

     
      /* this.getAllIntegration(); */
      this._butler.data=this.data;}

      onSubmit() {
        this.data.ref = (Math.floor(Math.random() * 10000000000000)).toString();
        this.data.images=this._butler.uploaderImages;
        this.dataApiService.saveIntegration(this.data).subscribe(response=>{
          console.log(response);
          // this.getAll();
          this._butler.uploaderImages=[];
          this.router.navigate(['integrationsAll']);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Integración guardada',
            showConfirmButton: false,
            timer: 1500
          })
         
          //  this.getProducts();
        });
        // Aquí puedes enviar los datos al servidor o realizar las acciones necesarias
        console.log(this.data);
        
        }
       
    

    ngAfterViewInit(): void {
  }

}
