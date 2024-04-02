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
  selector: 'app-editcliente',
  templateUrl: './editcliente.component.html',
  styleUrls: ['./editcliente.component.css']
})
export class EditclienteComponent implements AfterViewInit {
  @ViewChild('deleteSwal')
  category='Seleccione una';
  categorySeted:boolean=false;
  products:any={};public captions: UploaderCaptions = {
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
    size:'',
    description:'',
    ref: '',
     idCategory: '',
  };

  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman:Yeoman) { 
      this.data=this.yeoman.preview;
    }
    cancelarUpdate(){
      this.router.navigate(['/proAll']);
    }
    onSubmit() {
      // Verificar si hay una nueva imagen seleccionada
      if (this._butler.uploaderImages.length > 0) {
          // Si hay una nueva imagen seleccionada, actualizarla en this.data.images
          this.data.images = this._butler.uploaderImages;
      }
  
      // Realizar la actualización del producto
      this.dataApiService.productUpdate(this.data, this.yeoman.preview.id).subscribe(response => {
          console.log(response);
          this.router.navigate(['proAll']);
          this.data = {
              images: [] as string[],
              name: '',
              size: '',
              description: '',
              ref: '',
              idCategory: ''
          };
          this._butler.uploaderImages = [];
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Producto Actualizado',
              showConfirmButton: false,
              timer: 1500
          });
      });
  }
  

  ngAfterViewInit(): void {
  }

}
