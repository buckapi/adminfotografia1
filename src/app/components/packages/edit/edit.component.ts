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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements AfterViewInit {
  
  @ViewChild('deleteSwal')
  category='Seleccione una';
  categorySeted:boolean=false;
   integration:any={}; 
   products$:any={};
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

    ref: '',
    name: '',
    title: '',
    description: '', 
    placeSessions: [{place:'' }],
    numberPeople: '',
    clothings: [{cloth:'' }],
    numberPhoto: '',
    price:'',
    numberSessions:[{sesion:''}],
    duration:'',
    not:'',
    sesion:'',
    notes:[{not:''}],
    includes:[{inclu:''}],
    idCategory:'',
    faqs: [{ p: '', r: '' }]
  };
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman:Yeoman
    ){
      this.data=this.yeoman.preview;
     }
     cancelarUpdate(){
      this.router.navigate(['/pacAll']);
    }
      onSubmit() {
        if (this._butler.uploaderImages.length > 0) {
         this.data.images = this._butler.uploaderImages;
          }
          this.dataApiService.packagesUpdate(this.data, this.yeoman.preview.id).subscribe(response => {
              console.log(response);
              this.router.navigate(['pacAll']);
              this.data = {
                images: [] as string[],
                ref: '',
                name: '',
                title: '',
                description: '', 
                placeSessions: [{place:'' }],
                numberPeople: '',
                clothings: [{cloth:'' }],
                numberPhoto: '',
                price:'',
                numberSessions:[{sesion:''}],
                duration:'',
                not:'',
                sesion:'',
                notes:[{not:''}],
                includes:[{inclu:''}],
                idCategory:'',
                faqs: [{ p: '', r: '' }]
              };
              this._butler.uploaderImages = [];
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Paquete Actualizado',
                  showConfirmButton: false,
                  timer: 1500
              });
          });
        // Aquí puedes enviar los datos al servidor o realizar las acciones necesarias
        console.log(this.data);
        }
     getAllCategories(){
      this.dataApiService.getAllCategory().subscribe(response=>{
        this.yeoman.categories=response;
        this.yeoman.allcategory=response;
        this.yeoman.allCategoriesSize= this.yeoman.categories.length;
      });
    }
   
    onCategorySelect(category:any) {        
      this.data.idCategory = "c"+category.id;
      console.log(category.id);
    }
    
    setCategory(category:any){
      let index=category;
      console.log("seleccionada: "+this.yeoman.allcategory[index].name);
      this.categorySeted=true;
      if (this.yeoman.categories!==undefined){
      this.data.idCategory=this.yeoman.allcategory[index].id;
      console.log("id: "+JSON.stringify(this.data.idCategory));
      }
    }
    addFaq() {
      this.data.faqs.push({ p: '', r: '' });
    }
    addInclude() {
      this.data.includes.push({inclu:''});
    }
    addCloting() {
      this.data.clothings.push({cloth:''});
    }
    addPlaceSession() {
      this.data.placeSessions.push({place:''});
    }
    addNote() {
      this.data.notes.push({not:''});
    }
    addSesion(){
      this.data.numberSessions.push({sesion:''});
    }

  ngAfterViewInit(): void {
  }

}
