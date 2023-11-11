import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltestComponent } from './alltest.component';

const routes: Routes = [{ path: '', component: AlltestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlltestRoutingModule { }
