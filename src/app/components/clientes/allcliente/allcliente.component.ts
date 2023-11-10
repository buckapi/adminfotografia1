import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import{NgxUiLoaderService} from 'ngx-ui-loader';
@Component({
  selector: 'app-allcliente',
  templateUrl: './allcliente.component.html',
  styleUrls: ['./allcliente.component.css']
})
export class AllclienteComponent implements OnInit {
category:any;
clients:any;

  constructor(
    private ngxService: NgxUiLoaderService,
    public router:Router,    
    public dataApiService:DataApiService,
    public yeoman:Yeoman
    ) { 
  this.getAll();
  }
getAll(){
  this.ngxService.start("loader-01");
  this.dataApiService.getAllClient().subscribe(response=>{
    this.yeoman.allclient=response;
    this.ngxService.stop("loader-01");
  });
}

setPreview(i:any){
  this.yeoman.preview=this.yeoman.allclient[i];
  this.router.navigate(['clientdetail']);
}
  ngOnInit(): void {
  }

}
