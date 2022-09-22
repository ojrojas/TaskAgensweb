import { createReducer, on } from "@ngrx/store";
import { ICreateTaskApplicationRequest } from "src/app/core/dtos/taskapplication/icreatetaskapplicationrequest";
import { ICreateTaskApplicationResponse } from "src/app/core/dtos/taskapplication/icreatetaskapplicationresponse";
import { IDeleteTaskApplicationRequest } from "src/app/core/dtos/taskapplication/ideletetaskapplicationrequest";
import { IDeleteTaskApplicationResponse } from "src/app/core/dtos/taskapplication/ideletetaskapplicationresponse";
import { IGetAllTaskApplicationResponse } from "src/app/core/dtos/taskapplication/igetalltaskapplicationresponse";
import { IGetTaskApplicationByIdRequest } from "src/app/core/dtos/taskapplication/igettaskapplicationbyidrequest";
import { IGetTaskApplicationByIdResponse } from "src/app/core/dtos/taskapplication/igettaskapplicationbyidresponse";
import { IUpdateTaskApplicationRequest } from "src/app/core/dtos/taskapplication/iupdatetaskapplicationrequest";
import { IUpdateTaskApplicationResponse } from "src/app/core/dtos/taskapplication/iupdatetaskapplicationresponse";
import * as fromActions from './taskapplication.actions';

export const TaskApplicationFeatureKey = 'TaskApplication';

export interface State {
    getAllTaskApplicationResponse: IGetAllTaskApplicationResponse | undefined;
    getTaskApplicationByIdRequest: IGetTaskApplicationByIdRequest | undefined;
    getTaskApplicationByIdResponse: IGetTaskApplicationByIdResponse | undefined;
    createTaskApplicationRequest: ICreateTaskApplicationRequest | undefined;
    createTaskApplicationResponse: ICreateTaskApplicationResponse | undefined;
    updateTaskApplicationRequest: IUpdateTaskApplicationRequest | undefined;
    updateTaskApplicationResponse: IUpdateTaskApplicationResponse | undefined;
    deleteTaskApplicationRequest: IDeleteTaskApplicationRequest | undefined;
    delteTaskApplicationResponse: IDeleteTaskApplicationResponse | undefined;
    isloading: boolean;
    error: any;
    loading: boolean;
};

export const initialState: State = {
    getAllTaskApplicationResponse: undefined,
    getTaskApplicationByIdRequest: undefined,
    getTaskApplicationByIdResponse: undefined,
    createTaskApplicationRequest: undefined,
    createTaskApplicationResponse: undefined,
    updateTaskApplicationRequest: undefined,
    updateTaskApplicationResponse: undefined,
    deleteTaskApplicationRequest: undefined,
    delteTaskApplicationResponse: undefined,
    isloading: false,
    error: undefined,
    loading: false
};

export const reducer = createReducer(
    initialState,
    on(fromActions.getAllTaskApplication, state => ({
        ...state,
        isloading: true
    })),
    on(fromActions.getTaskApplicationById, (state, { getTaskApplicationByIdRequest }) => ({
        ...state,
        getTaskApplicationByIdRequest,
        isloading: true
    })),
    on(fromActions.getTaskApplicationSuccessById, (state, { getTaskApplicationByIdResponse }) => ({
        ...state,
        getTaskApplicationByIdResponse,
        isloading: false
    })),
    on(fromActions.getAllTaskApplicationSuccess, (state, { getAllTaskApplicationResponse }) => ({
        ...state,
        getAllTaskApplicationResponse,
        isloading: false
    })),
    on(fromActions.createTaskApplication, (state, { createTaskApplicationRequest }) => ({
        ...state,
        createTaskApplicationRequest,
        isloading: true
    })),
    on(fromActions.createTaskApplicationSuccess, (state, { createTaskApplicationResponse }) => ({
        ...state,
        createTaskApplicationResponse,
        isloading: false
    })),
    on(fromActions.updateTaskApplication, (state, { updateTaskApplicationRequest }) => ({
        ...state,
        updateTaskApplicationRequest,
        isloading: true
    })),
    on(fromActions.updateTaskApplicationSuccess, (state, { updateTaskApplicationResponse }) => ({
        ...state,
        updateTaskApplicationResponse,
        isloading: false
    })),
    on(fromActions.deleteTaskApplication, (state, { deleteTaskApplicationRequest }) => ({
        ...state,
        deleteTaskApplicationRequest,
        isloading: true
    })),
    on(fromActions.deleteTaskApplicationSuccess, (state, { deleteTaskApplicationResponse }) => ({
        ...state,
        deleteTaskApplicationResponse,
        isloading: false
    })),
    on(fromActions.onError, (state, { error }) => ({
        ...state,
        isloading: false,
        error
    }))
)
