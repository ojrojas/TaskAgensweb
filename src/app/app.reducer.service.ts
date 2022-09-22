import { Injectable } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as fromLoginReducer from './login/redux/login.reducer';
import * as fromAuthReducer from './auth/redux/auth.reducer';
import * as fromTypeUserReducer from './typeuser/redux/typeuser.reducer';
import * as fromTypeTaskReducer from './typetask/redux/typetask.reducer';
import * as fromActivityTaskReducer from './activitytask/redux/activitytask.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppReducerService {

  constructor() { }

  getReducers(): ActionReducerMap<AppState>{
    return {
      loginState: fromLoginReducer.reducer,
      authState : fromAuthReducer.reducer,
      typeUserState: fromTypeUserReducer.reducer,
      typeTaskState: fromTypeTaskReducer.reducer,
      activityTaskState :fromActivityTaskReducer.reducer
    };
  }
}