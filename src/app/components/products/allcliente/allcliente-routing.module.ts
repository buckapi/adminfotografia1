import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllclienteComponent } from './allcliente.component';

const routes: Routes = [{ path: '', component: AllclienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllclienteRoutingModule { }
