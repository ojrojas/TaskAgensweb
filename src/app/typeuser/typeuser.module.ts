import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeuserRoutingModule } from './typeuser-routing.module';
import { CreateEditComponent } from './components/create/create-edit.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { DetailDeleteComponent } from './components/detail/detail-delete.component';
import { SharedModule } from '../shared/shared.module';
import { TypeuserComponent } from './components/typeuser.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from './redux/typeuser.reducer';
import { TypeUserEffects } from './redux/typeuser.effects';

@NgModule({
  declarations: [
    CreateEditComponent,
    ListTableComponent,
    DetailDeleteComponent,
    TypeuserComponent,
  ],
  imports: [
    CommonModule,
    TypeuserRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromReducer.typeUserFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([TypeUserEffects])
  ], exports: [
  ]
})
export class TypeuserModule { }
