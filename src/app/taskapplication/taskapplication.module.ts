import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskapplicationRoutingModule } from './taskapplication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskApplicationComponent } from './components/taskapplication.component';
import { CreateEditComponent } from './components/create/create-edit.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { DetailDeleteComponent } from './components/detail/detail-delete.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './redux/taskapplication.reducer';
import { TaskApplicationEffects } from './redux/taskapplication.effects';
import { ActivityTaskEffects } from '../activitytask/redux/activitytask.effects';
import { TypeTaskEffects } from '../typetask/redux/typetask.effects';


@NgModule({
  declarations: [
    TaskApplicationComponent,
    CreateEditComponent,
    ListTableComponent,
    DetailDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskapplicationRoutingModule,
    StoreModule.forFeature(fromReducer.TaskApplicationFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([TaskApplicationEffects,ActivityTaskEffects,TypeTaskEffects ])
  ]
})
export class TaskapplicationModule { }
