import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeTaskRoutingModule } from './typetask-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from './redux/typetask.reducer';
import { TypeTaskEffects } from './redux/typetask.effects';
import { CreateEditComponent } from './components/create/create-edit.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { DetailDeleteComponent } from './components/detail/detail-delete.component';
import { TypeTaskComponent } from './components/typetask.component';


@NgModule({
  declarations: [
    CreateEditComponent,
    ListTableComponent,
    DetailDeleteComponent,
    TypeTaskComponent,
  ],
  imports: [
    CommonModule,
    TypeTaskRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromReducer.typeTaskFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([TypeTaskEffects])
  ], 
})
export class TypetaskModule { }
