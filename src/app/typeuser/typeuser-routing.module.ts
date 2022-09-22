import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeuserComponent } from './components/typeuser.component';

const routes: Routes = [{
  path:'',
  component:TypeuserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeuserRoutingModule { }
