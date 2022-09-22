import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskApplicationComponent } from './components/taskapplication.component';

const routes: Routes = [
  {
    path:'',
    component:TaskApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskapplicationRoutingModule { }
