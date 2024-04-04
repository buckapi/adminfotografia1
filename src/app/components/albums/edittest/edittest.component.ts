import { Component, OnInit ,AfterViewInit,ViewChild} from '@angular/core';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { Yeoman } from '@services/yeoman.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edittest',
  templateUrl: './edittest.component.html',
  styleUrls: ['./edittest.component.css']
})
export class EdittestComponent implements AfterViewInit {
  @ViewChild('deleteSwal')
  category='Seleccione una';
  showDeleteButton: boolean[] = [];

  categorySeted:boolean=false;
  imagesToDelete: boolean[] = [];
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
    idCategory: '',
  };adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman:Yeoman) 
    {
      this.data=this.yeoman.preview;

     }
     cancelarUpdate(){
      this.router.navigate(['/albAll']);
    }

    toggleDeleteButton(index: number, isVisible: boolean) {
      this.showDeleteButton[index] = isVisible;
  }
    
delete(indice:any){
this.yeoman.preview.images.splice(indice);
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'borrado',
  showConfirmButton: false,
  timer: 1500
  
});

}

    onSubmit() {
      // Obtener las imágenes actuales del álbum
      let currentImages = this.yeoman.preview.images;
  
     
  
      // Actualizar this.data.images con las imágenes actuales
      this.yeoman.preview.images = currentImages;
  
  
      // Verificar si hay nuevas imágenes seleccionadas para cargar
      if (this._butler.uploaderImages.length > 0) {
          // Agregar las nuevas imágenes al array de imágenes
          this.data.images.push(...this._butler.uploaderImages);
  
          // Limpiar el cargador de imágenes
          this._butler.uploaderImages = [];
      }
  
      // Realizar la actualización del álbum con las imágenes actuales y nuevas
      this.dataApiService.albumsUpdate(this.data, this.yeoman.preview.id).subscribe(response => {
          console.log(response);
          this.router.navigate(['albAll']);
          this.data = {
              images: [] as string[], // o cualquier otro tipo de dato adecuado, como any[]
              name: '',
              ref: '',
              idCategory: ''
          };
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Álbum Actualizado',
              showConfirmButton: false,
              timer: 1500
          });
      });
  }
  
  
  ngAfterViewInit(): void {
  }

}
