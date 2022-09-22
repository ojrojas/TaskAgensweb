import { createAction, props } from "@ngrx/store";
import { ICreateTaskApplicationRequest } from "src/app/core/dtos/taskapplication/icreatetaskapplicationrequest";
import { ICreateTaskApplicationResponse } from "src/app/core/dtos/taskapplication/icreatetaskapplicationresponse";
import { IDeleteTaskApplicationRequest } from "src/app/core/dtos/taskapplication/ideletetaskapplicationrequest";
import { IDeleteTaskApplicationResponse } from "src/app/core/dtos/taskapplication/ideletetaskapplicationresponse";
import { IGetAllTaskApplicationResponse } from "src/app/core/dtos/taskapplication/igetalltaskapplicationresponse";
import { IGetTaskApplicationByIdRequest } from "src/app/core/dtos/taskapplication/igettaskapplicationbyidrequest";
import { IGetTaskApplicationByIdResponse } from "src/app/core/dtos/taskapplication/igettaskapplicationbyidresponse";
import { IUpdateTaskApplicationRequest } from "src/app/core/dtos/taskapplication/iupdatetaskapplicationrequest";
import { IUpdateTaskApplicationResponse } from "src/app/core/dtos/taskapplication/iupdatetaskapplicationresponse";


export const getAllTaskApplication = createAction(
    '[TaskApplication] get all task application'
);

export const getAllTaskApplicationSuccess = createAction(
    '[TaskApplication] get all task application success',
    props<{getAllTaskApplicationResponse: IGetAllTaskApplicationResponse}>()
);

export const getTaskApplicationById = createAction(
    '[TaskApplication] get  task application by id',
    props<{getTaskApplicationByIdRequest : IGetTaskApplicationByIdRequest}>()
);

export const getTaskApplicationSuccessById = createAction(
    '[TaskApplication] get task application by id success',
    props<{getTaskApplicationByIdResponse: IGetTaskApplicationByIdResponse}>()
);

export const createTaskApplication = createAction(
    '[TaskApplication] create task application', 
    props<{createTaskApplicationRequest: ICreateTaskApplicationRequest}>()
);

export const createTaskApplicationSuccess = createAction(
    '[TaskApplication] create task application success',
    props<{createTaskApplicationResponse: ICreateTaskApplicationResponse}>()
);

export const updateTaskApplication = createAction(
    '[TaskApplication] update task application',
    props<{updateTaskApplicationRequest: IUpdateTaskApplicationRequest }>()
);

export const updateTaskApplicationSuccess = createAction(
    '[TaskApplication] update task application success',
    props<{updateTaskApplicationResponse: IUpdateTaskApplicationResponse }>()
);

export const deleteTaskApplication = createAction(
    '[TaskApplication] delete task application', 
    props<{deleteTaskApplicationRequest: IDeleteTaskApplicationRequest}>()
);

export const deleteTaskApplicationSuccess = createAction(
    '[TaskApplication] delete task application success', 
    props<{deleteTaskApplicationResponse: IDeleteTaskApplicationResponse}>()
);

export const onError = createAction(
    '[TaskApplication] On error request success',
    props<{error: any}>()
);