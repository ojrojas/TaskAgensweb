import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitytaskRoutingModule } from './activitytask-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ActivityTaskComponent } from './components/activitytask.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { CreateEditComponent } from './components/create/create-edit.component';
import { DetailDeleteComponent } from './components/detail/detail-delete.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityTaskEffects } from './redux/activitytask.effects';
import * as fromReducer from './redux/activitytask.reducer';


@NgModule({
  declarations: [
    ActivityTaskComponent,
    ListTableComponent,
    CreateEditComponent,
    DetailDeleteComponent
  ],
  imports: [
    CommonModule,
    ActivitytaskRoutingModule, 
    SharedModule,
    SharedModule,
    StoreModule.forFeature(fromReducer.ActivityTaskFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([ActivityTaskEffects])
  ]
})
export class ActivitytaskModule { }
