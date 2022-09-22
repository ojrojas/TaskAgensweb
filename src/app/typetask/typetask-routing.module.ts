import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeTaskComponent } from './components/typetask.component';

const routes: Routes = [
  {
    path:'',
    component:TypeTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeTaskRoutingModule { }
