import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detailtest',
  templateUrl: './detailtest.component.html',
  styleUrls: ['./detailtest.component.css']
})
export class DetailtestComponent implements OnInit {
  testimony:any;
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) 
    { 
      //  if(this.yeoman.preview.images[0]===undefined){this.router.navigate([''])}
    }
delete(){ 
  this.dataApiService.deleteTestimony(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllTestimony().subscribe(response=>{
      this.yeoman.alltestimony=response;
    });
  });
  this.router.navigate(['/testall']);
}
cancelDelete(){}
  ngOnInit(): void {
  }

}
