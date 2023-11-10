import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import{NgxUiLoaderService} from 'ngx-ui-loader';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  integration:any;

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
  this.dataApiService.getAllIntegration().subscribe(response=>{
    this.yeoman.allintegration=response;
    this.ngxService.stop("loader-01");
    
  });
}

setPreview(i:any){
  this.yeoman.preview=this.yeoman.allintegration[i];
  this.router.navigate(['integrationsDetail']);
}
  ngOnInit(): void {
  }

}
