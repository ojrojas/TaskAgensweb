import { createAction, props } from "@ngrx/store";
import { ICreateTypeTaskRequest } from "src/app/core/dtos/typetask/createtypetaskrequest";
import { ICreateTypeTaskResponse } from "src/app/core/dtos/typetask/createtypetaskresponse";
import { IDeleteTypeTaskRequest } from "src/app/core/dtos/typetask/deletetypetaskrequest";
import { IDeleteTypeTaskResponse } from "src/app/core/dtos/typetask/deletetypetaskresponse";
import { IGetAllTypeTaskResponse } from "src/app/core/dtos/typetask/getalltypetaskresponse";
import { IUpdateTypeTaskRequest } from "src/app/core/dtos/typetask/updatetypetaskrequest";
import { IUpdateTypeTaskResponse } from "src/app/core/dtos/typetask/updatetypetaskresponse";


export const getAllTypeTask = createAction(
    '[TypeTask] get all type Task'
);

export const getAllTypeTaskSuccess = createAction(
    '[TypeTask] get all type Task success',
    props<{getAllTypeTaskResponse: IGetAllTypeTaskResponse}>()
);

export const createTypeTask = createAction(
    '[TypeTask] create type Task', 
    props<{createTypeTaskRequest: ICreateTypeTaskRequest}>()
);

export const createTypeTaskSuccess = createAction(
    '[TypeTask] create type Task success',
    props<{createTypeTaskResponse: ICreateTypeTaskResponse}>()
);

export const updateTypeTask = createAction(
    '[TypeTask] update type Task',
    props<{updateTypeTaskRequest: IUpdateTypeTaskRequest }>()
);

export const updateTypeTaskSuccess = createAction(
    '[TypeTask] update type Task success',
    props<{updateTypeTaskResponse: IUpdateTypeTaskResponse }>()
);

export const deleteTypeTask = createAction(
    '[TypeTask] delete type Task', 
    props<{deleteTypeTaskRequest: IDeleteTypeTaskRequest}>()
);

export const deleteTypeTaskSuccess = createAction(
    '[TypeTask] delete type Task success', 
    props<{deleteTypeTaskResponse: IDeleteTypeTaskResponse}>()
);

export const onError = createAction(
    '[TypeTask] On error request success',
    props<{error: any}>()
);