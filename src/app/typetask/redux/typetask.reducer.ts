import { createReducer, on } from "@ngrx/store";
import { ICreateTypeTaskRequest } from "src/app/core/dtos/typetask/createtypetaskrequest";
import { ICreateTypeTaskResponse } from "src/app/core/dtos/typetask/createtypetaskresponse";
import { IDeleteTypeTaskRequest } from "src/app/core/dtos/typetask/deletetypetaskrequest";
import { IDeleteTypeTaskResponse } from "src/app/core/dtos/typetask/deletetypetaskresponse";
import { IGetAllTypeTaskResponse } from "src/app/core/dtos/typetask/getalltypetaskresponse";
import { IUpdateTypeTaskRequest } from "src/app/core/dtos/typetask/updatetypetaskrequest";
import { IUpdateTypeTaskResponse } from "src/app/core/dtos/typetask/updatetypetaskresponse";
import * as fromActions from './typetask.actions';

export const typeTaskFeatureKey = 'typeTask';

export interface State {
    getAllTypeTaskResponse: IGetAllTypeTaskResponse | undefined;
    createTypeTaskRequest: ICreateTypeTaskRequest | undefined;
    createTypeTaskResponse: ICreateTypeTaskResponse | undefined;
    updateTypeTaskRequest: IUpdateTypeTaskRequest | undefined;
    updateTypeTaskResponse: IUpdateTypeTaskResponse | undefined;
    deleteTypeTaskRequest: IDeleteTypeTaskRequest | undefined;
    delteTypeTaskResponse: IDeleteTypeTaskResponse | undefined;
    isloading: boolean;
    error: any;
    loading: boolean;
};

export const initialState: State = {
    getAllTypeTaskResponse: undefined,
    createTypeTaskRequest:  undefined,
    createTypeTaskResponse:  undefined,
    updateTypeTaskRequest:  undefined,
    updateTypeTaskResponse:  undefined,
    deleteTypeTaskRequest:  undefined,
    delteTypeTaskResponse:  undefined,
    isloading: false,
    error: undefined,
    loading: false
};

export const reducer = createReducer(
    initialState,
    on(fromActions.getAllTypeTask, state => ({
        ...state,
        isloading: true
    })),
    on(fromActions.getAllTypeTaskSuccess, (state, { getAllTypeTaskResponse }) => ({
        ...state,
        getAllTypeTaskResponse,
        isloading: false
    })),
    on(fromActions.createTypeTask, (state, { createTypeTaskRequest }) => ({
        ...state,
        createTypeTaskRequest,
        isloading: true
    })),
    on(fromActions.createTypeTaskSuccess, (state, { createTypeTaskResponse }) => ({
        ...state,
        createTypeTaskResponse,
        isloading: false
    })),
    on(fromActions.updateTypeTask, (state, { updateTypeTaskRequest }) => ({
        ...state,
        updateTypeTaskRequest,
        isloading: true
    })),
    on(fromActions.updateTypeTaskSuccess, (state, { updateTypeTaskResponse }) => ({
        ...state,
        updateTypeTaskResponse,
        isloading: false
    })),
    on(fromActions.deleteTypeTask, (state, { deleteTypeTaskRequest }) => ({
        ...state,
        deleteTypeTaskRequest,
        isloading: true
    })),
    on(fromActions.deleteTypeTaskSuccess, (state, { deleteTypeTaskResponse }) => ({
        ...state,
        deleteTypeTaskResponse,
        isloading: false
    })),
    on(fromActions.onError, (state, { error }) => ({
        ...state,
        isloading: false,
        error
    }))
)
