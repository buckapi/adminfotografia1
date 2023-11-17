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
  albums:any;
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) 
    { 
      //  if(this.yeoman.preview.images[0]===undefined){this.router.navigate([''])}
    }
delete(){ 
  this.dataApiService.deleteAlbums(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllAlbums().subscribe(response=>{
      this.yeoman.allAlbums=response;
    });
  });
  this.router.navigate(['/albAll']);
}
cancelDelete(){}
  ngOnInit(): void {
  }

}
