import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtestComponent } from './addtest.component';

const routes: Routes = [{ path: '', component: AddtestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddtestRoutingModule { }
