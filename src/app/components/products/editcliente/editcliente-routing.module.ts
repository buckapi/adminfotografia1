import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditclienteComponent } from './editcliente.component';

const routes: Routes = [{ path: '', component: EditclienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditclienteRoutingModule { }
