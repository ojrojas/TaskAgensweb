import { createReducer, on } from "@ngrx/store";
import { ICreateActivityTaskRequest } from "src/app/core/dtos/activitytask/icreateactivitytaskrequest";
import { ICreateActivityTaskResponse } from "src/app/core/dtos/activitytask/icreateactivitytaskresponse";
import { IDeleteActivityTaskRequest } from "src/app/core/dtos/activitytask/ideleteactivitytaskrequest";
import { IDeleteActivityTaskResponse } from "src/app/core/dtos/activitytask/ideleteactivitytaskresponse";
import { IGetAllActivityTasksResponse } from "src/app/core/dtos/activitytask/igetallactivityresponse";
import { IUpdateActivityTaskRequest } from "src/app/core/dtos/activitytask/iupdateactivitytaskrequest";
import { IUpdateActivityTaskResponse } from "src/app/core/dtos/activitytask/iupdateactivitytaskresponse";
import * as fromActions from './activitytask.actions';


export const ActivityTaskFeatureKey = 'ActivityTask';

export interface State {
    getAllActivityTaskResponse: IGetAllActivityTasksResponse | undefined;
    createActivityTaskRequest: ICreateActivityTaskRequest | undefined;
    createActivityTaskResponse: ICreateActivityTaskResponse | undefined;
    updateActivityTaskRequest: IUpdateActivityTaskRequest | undefined;
    updateActivityTaskResponse: IUpdateActivityTaskResponse | undefined;
    deleteActivityTaskRequest: IDeleteActivityTaskRequest | undefined;
    delteActivityTaskResponse: IDeleteActivityTaskResponse | undefined;
    isloading: boolean;
    error: any;
    loading: boolean;
};

export const initialState: State = {
    getAllActivityTaskResponse: undefined,
    createActivityTaskRequest:  undefined,
    createActivityTaskResponse:  undefined,
    updateActivityTaskRequest:  undefined,
    updateActivityTaskResponse:  undefined,
    deleteActivityTaskRequest:  undefined,
    delteActivityTaskResponse:  undefined,
    isloading: false,
    error: undefined,
    loading: false
};

export const reducer = createReducer(
    initialState,
    on(fromActions.getAllActivityTask, state => ({
        ...state,
        isloading: true
    })),
    on(fromActions.getAllActivityTaskSuccess, (state, { getAllActivityTaskResponse }) => ({
        ...state,
        getAllActivityTaskResponse,
        isloading: false
    })),
    on(fromActions.createActivityTask, (state, { createActivityTaskRequest }) => ({
        ...state,
        createActivityTaskRequest,
        isloading: true
    })),
    on(fromActions.createActivityTaskSuccess, (state, { createActivityTaskResponse }) => ({
        ...state,
        createActivityTaskResponse,
        isloading: false
    })),
    on(fromActions.updateActivityTask, (state, { updateActivityTaskRequest }) => ({
        ...state,
        updateActivityTaskRequest,
        isloading: true
    })),
    on(fromActions.updateActivityTaskSuccess, (state, { updateActivityTaskResponse }) => ({
        ...state,
        updateActivityTaskResponse,
        isloading: false
    })),
    on(fromActions.deleteActivityTask, (state, { deleteActivityTaskRequest }) => ({
        ...state,
        deleteActivityTaskRequest,
        isloading: true
    })),
    on(fromActions.deleteActivityTaskSuccess, (state, { deleteActivityTaskResponse }) => ({
        ...state,
        deleteActivityTaskResponse,
        isloading: false
    })),
    on(fromActions.onError, (state, { error }) => ({
        ...state,
        isloading: false,
        error
    }))
)
