import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/core/models/iuser.model';
import * as fromActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
    user: IUser | undefined;
    isLoading: boolean;
    token: string | undefined;
    isLogged: boolean;
    error: any
}

export const initialState: State = {
    user: undefined,
    isLoading: false,
    token: undefined,
    error: null,
    isLogged: false,
};

export const reducer = createReducer(
    initialState,
    on(fromActions.setClaimsAuth, (state,  {token} ) => ({
        ...state,
        token: token,
        isLoading: true
    })),
    on(fromActions.setClaimsAuthSuccess, (state, { user }) => ({
        ...state,
        user: user,
        isLogged: true,
        isLoading: false
    })),
    on(fromActions.logOutAuth, (state) => ({
        ...state,
        token:undefined,
        isLogged:false,
        isLoading:true,
    })),
    on(fromActions.logOutAuth, (state) => ({
        ...state,
        isLoading:false,
    })),
    on(fromActions.onError, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
        isLogged: false
    })),
);