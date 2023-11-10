import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailclienteComponent } from './detailcliente.component';

const routes: Routes = [{ path: '', component: DetailclienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailclienteRoutingModule { }
