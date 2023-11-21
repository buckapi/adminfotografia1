import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRESTGuard } from '@app/guards/authREST.guard';
const routes: Routes = [
  
  { path: 'home',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  
  { path: 'servAdd', loadChildren: () => import('./components/services/addcategory/addcategory.module').then(m => m.AddcategoryModule) },

  { path: 'servAll', loadChildren: () => import('./components/services/allcategory/allcategory.module').then(m => m.AllcategoryModule) },

  { path: 'servDetail', loadChildren: () => import('./components/services/detailcategory/detailcategory.module').then(m => m.DetailcategoryModule) },

  { path: 'proAdd', loadChildren: () => import('./components/products/addcliente/addcliente.module').then(m => m.AddclienteModule) },

  { path: 'proAll', loadChildren: () => import('./components/products/allcliente/allcliente.module').then(m => m.AllclienteModule) },

  { path: 'proDetail', loadChildren: () => import('./components/products/detailcliente/detailcliente.module').then(m => m.DetailclienteModule) },

  { path: 'albAdd', loadChildren: () => import('./components/albums/addtest/addtest.module').then(m => m.AddtestModule) },

  { path: 'albAll', loadChildren: () => import('./components/albums/alltest/alltest.module').then(m => m.AlltestModule) },

  { path: 'albDetail', loadChildren: () => import('./components/albums/detailtest/detailtest.module').then(m => m.DetailtestModule) },

  { path: 'pacAll', loadChildren: () => import('./components/packages/all/all.module').then(m => m.AllModule) },
  
  { path: 'pacAdd', loadChildren: () => import('./components/packages/add/add.module').then(m => m.AddModule) },

  { path: 'pacDetail', loadChildren: () => import('./components/packages/detail/detail.module').then(m => m.DetailModule) },
  
  { path: 'requestAll', loadChildren: () => import('./components/request/all/all.module').then(m => m.AllModule) },

  /*   
  { path: 'solutionDetail', loadChildren: () => import('./components/click2order/detail/detail.module').then(m => m.DetailModule) },
  { path: 'solutionAll', loadChildren: () => import('./components/click2order/all/all.module').then(m => m.AllModule) },
  { path: 'solutionAdd', loadChildren: () => import('./components/click2order/add/add.module').then(m => m.AddModule) },
  { path: 'modulesAdd', loadChildren: () => import('./components/modules/add/add.module').then(m => m.AddModule) },
  { path: 'modulesDetail', loadChildren: () => import('./components/modules/detail/detail.module').then(m => m.DetailModule) },
  */
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
