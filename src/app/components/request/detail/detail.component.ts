import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  category:string="";
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) { 
      //  if(this.yeoman.preview.images[0]===undefined){this.router.navigate([''])}
      console.log(JSON.stringify(this.yeoman.preview))
      this.findCategory();
      }
delete(){ 
  this.dataApiService.deleteModules(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllModules().subscribe(response=>{
      this.yeoman.allModules=response;
    });
  });
  this.router.navigate(['/modulesAll']);
}
findCategory(){
  for (let i=0;i<this.yeoman.allcategory.length;i++){
    if(this.yeoman.preview.idCategory===this.yeoman.allcategory[i].id){
      this.category=this.yeoman.allcategory[i].name;
    }
  }
}
cancelDelete(){}
  ngOnInit(): void {
  }

}
