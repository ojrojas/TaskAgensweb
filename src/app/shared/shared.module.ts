import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderPageComponent } from './components/headerpages/headerpage.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../auth/redux/auth.effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer  from '../auth/redux/auth.reducer';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog'; 
import { DialogSharedService } from './service/dialog-shared.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select'; 

@NgModule({
  declarations: [
    HeaderPageComponent,
    LoadingComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    StoreModule.forFeature(fromReducer.authFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    HeaderPageComponent,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    SidenavComponent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSelectModule
  ], providers:[
    DialogSharedService
  ]
})
export class SharedModule { }
