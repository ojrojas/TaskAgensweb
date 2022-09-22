import { inject, InjectionToken } from '@angular/core';
import {  ActionReducerMap, createSelector } from '@ngrx/store';
import { AppReducerService } from './app.reducer.service';
import * as fromLoginReducer from './login/redux/login.reducer';
import * as fromAuthReducer from './auth/redux/auth.reducer';
import * as fromTypeUserReducer from './typeuser/redux/typeuser.reducer';
import * as fromTypeTaskReducer from './typetask/redux/typetask.reducer';
import * as fromActivityTaskReducer from './activitytask/redux/activitytask.reducer';

export interface AppState {
    loginState: fromLoginReducer.State;
    authState: fromAuthReducer.State;
    typeUserState: fromTypeUserReducer.State;
    typeTaskState: fromTypeTaskReducer.State;
    activityTaskState: fromActivityTaskReducer.State;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>
('Registered reducers', {
    factory: () => {
        const serv = inject(AppReducerService);
        return serv.getReducers();
    }
});

export const getAppStateAuthState = (state: AppState) => state.authState;

export const getAppStateAuthData = createSelector(
    getAppStateAuthState,
    (state) => state
);