import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Yeoman {
  view:string='grid';
  preview:any={};
  user:any;
  all:any=[];
  existencias:any=[];
  existenciasSize:number=0;
  allCategoriesSize:number=0;
  allClientsSize:number=0;
    virtualRoute:any="dashboard";
    pop:Boolean=false;
    data:any={};
    products:any={};
    categories:any=[];
    category:any={};
    allcategory:any=[];
    clients:any=[];
    allclient:any=[];
    testimony:any=[];
    alltestimony:any=[];
    rubro:any=[];
    allrubro:any=[];
    integration:any={};
    allintegration:any=[];
    modules:any={};
    allModules:any=[];
    currency:number=1;
    config: {
      clientSelected:number;
    } = {clientSelected:-1} ;
    origin: {
      name: string;
      restUrl: string;
      GQLUrl: string;
    } = {
      name: "default",
      restUrl: "https://db.buckapi.com:9032",
      GQLUrl: "<origin GQL url>",
    };
    constructor() {}
}
