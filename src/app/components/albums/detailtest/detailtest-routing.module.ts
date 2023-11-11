import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailtestComponent } from './detailtest.component';

const routes: Routes = [{ path: '', component: DetailtestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailtestRoutingModule { }
