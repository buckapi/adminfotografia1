import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRESTGuard } from '@app/guards/authREST.guard';
const routes: Routes = [
  
  { path: 'home',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  
  { path: 'servAdd', loadChildren: () => import('./components/services/addcategory/addcategory.module').then(m => m.AddcategoryModule) },

  { path: 'servAll', loadChildren: () => import('./components/services/allcategory/allcategory.module').then(m => m.AllcategoryModule) },

  { path: 'servDetail', loadChildren: () => import('./components/services/detailcategory/detailcategory.module').then(m => m.DetailcategoryModule) },

  { path: 'servEdit', loadChildren: () => import('./components/services/editcategory/editcategory.module').then(m => m.EditcategoryModule) },

  { path: 'proAdd', loadChildren: () => import('./components/products/addcliente/addcliente.module').then(m => m.AddclienteModule) },

  { path: 'proAll', loadChildren: () => import('./components/products/allcliente/allcliente.module').then(m => m.AllclienteModule) },

  { path: 'proDetail', loadChildren: () => import('./components/products/detailcliente/detailcliente.module').then(m => m.DetailclienteModule) },

  { path: 'proEdit', loadChildren: () => import('./components/products/editcliente/editcliente.module').then(m => m.EditclienteModule) },

  { path: 'albAdd', loadChildren: () => import('./components/albums/addtest/addtest.module').then(m => m.AddtestModule) },

  { path: 'albAll', loadChildren: () => import('./components/albums/alltest/alltest.module').then(m => m.AlltestModule) },

  { path: 'albDetail', loadChildren: () => import('./components/albums/detailtest/detailtest.module').then(m => m.DetailtestModule) },

  { path: 'albEdit', loadChildren: () => import('./components/albums/edittest/edittest.module').then(m => m.EdittestModule) },

  { path: 'pacAll', loadChildren: () => import('./components/packages/all/all.module').then(m => m.AllModule) },
  
  { path: 'pacAdd', loadChildren: () => import('./components/packages/add/add.module').then(m => m.AddModule) },

  { path: 'pacDetail', loadChildren: () => import('./components/packages/detail/detail.module').then(m => m.DetailModule) },
 
  { path: 'pacEdit', loadChildren: () => import('./components/packages/edit/edit.module').then(m => m.EditModule) },

  { path: 'requestAll', loadChildren: () => import('./components/request/all/all.module').then(m => m.AllModule) },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
