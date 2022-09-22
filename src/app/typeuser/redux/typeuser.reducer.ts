import { createReducer, on } from "@ngrx/store";
import { ICreateTypeUserRequest } from "src/app/core/dtos/typeuser/createtypeuserrequest";
import { ICreateTypeUserResponse } from "src/app/core/dtos/typeuser/createtypeuserresponse";
import { IDeleteTypeUserRequest } from "src/app/core/dtos/typeuser/deletetypeuserrequest";
import { IDeleteTypeUserResponse } from "src/app/core/dtos/typeuser/deletetypeuserresponse";
import { IGetAllTypeUsersResponse } from "src/app/core/dtos/typeuser/getalltypeusersresponse";
import { IUpdateTypeUserRequest } from "src/app/core/dtos/typeuser/updatetypeuserrequest";
import { IUpdateTypeUserResponse } from "src/app/core/dtos/typeuser/updatetypeuserresponse";
import * as fromActions from './typeuser.actions';


export const typeUserFeatureKey = 'typeuser';

export interface State {
    getAllTypeUserResponse: IGetAllTypeUsersResponse | undefined;
    createTypeUserRequest: ICreateTypeUserRequest | undefined;
    createTypeUserResponse: ICreateTypeUserResponse | undefined;
    updateTypeUserRequest: IUpdateTypeUserRequest | undefined;
    updateTypeUserResponse: IUpdateTypeUserResponse | undefined;
    deleteTypeUserRequest: IDeleteTypeUserRequest | undefined;
    delteTypeUserResponse: IDeleteTypeUserResponse | undefined;
    isloading: boolean;
    error: any;
    loading: boolean;
};

export const initialState: State = {
    getAllTypeUserResponse: undefined,
    createTypeUserRequest:  undefined,
    createTypeUserResponse:  undefined,
    updateTypeUserRequest:  undefined,
    updateTypeUserResponse:  undefined,
    deleteTypeUserRequest:  undefined,
    delteTypeUserResponse:  undefined,
    isloading: false,
    error: undefined,
    loading: false
};

export const reducer = createReducer(
    initialState,
    on(fromActions.getAllTypeUser, state => ({
        ...state,
        isloading: true
    })),
    on(fromActions.getAllTypeUserSuccess, (state, { getAllTypeUserResponse }) => ({
        ...state,
        getAllTypeUserResponse,
        isloading: false
    })),
    on(fromActions.createTypeUser, (state, { createTypeUserRequest }) => ({
        ...state,
        createTypeUserRequest,
        isloading: true
    })),
    on(fromActions.createTypeUserSuccess, (state, { createTypeUserResponse }) => ({
        ...state,
        createTypeUserResponse,
        isloading: false
    })),
    on(fromActions.updateTypeUser, (state, { updateTypeUserRequest }) => ({
        ...state,
        updateTypeUserRequest,
        isloading: true
    })),
    on(fromActions.updateTypeUserSuccess, (state, { updateTypeUserResponse }) => ({
        ...state,
        updateTypeUserResponse,
        isloading: false
    })),
    on(fromActions.deleteTypeUser, (state, { deleteTypeUserRequest }) => ({
        ...state,
        deleteTypeUserRequest,
        isloading: true
    })),
    on(fromActions.deleteTypeUserSuccess, (state, { deleteTypeUserResponse }) => ({
        ...state,
        deleteTypeUserResponse,
        isloading: false
    })),
    on(fromActions.onError, (state, { error }) => ({
        ...state,
        isloading: false,
        error
    }))
)
