import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdittestComponent } from './edittest.component';

const routes: Routes = [{ path: '', component: EdittestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdittestRoutingModule { }
