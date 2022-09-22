import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityTaskComponent } from './components/activitytask.component';

const routes: Routes = [
  {
    path:'',
    component:ActivityTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitytaskRoutingModule { }
