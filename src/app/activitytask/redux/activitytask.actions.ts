import { createAction, props } from "@ngrx/store";
import { ICreateActivityTaskRequest } from "src/app/core/dtos/activitytask/icreateactivitytaskrequest";
import { ICreateActivityTaskResponse } from "src/app/core/dtos/activitytask/icreateactivitytaskresponse";
import { IDeleteActivityTaskRequest } from "src/app/core/dtos/activitytask/ideleteactivitytaskrequest";
import { IDeleteActivityTaskResponse } from "src/app/core/dtos/activitytask/ideleteactivitytaskresponse";
import { IGetAllActivityTasksResponse } from "src/app/core/dtos/activitytask/igetallactivityresponse";
import { IUpdateActivityTaskRequest } from "src/app/core/dtos/activitytask/iupdateactivitytaskrequest";
import { IUpdateActivityTaskResponse } from "src/app/core/dtos/activitytask/iupdateactivitytaskresponse";


export const getAllActivityTask = createAction(
    '[ActivityTask] get all type user'
);

export const getAllActivityTaskSuccess = createAction(
    '[ActivityTask] get all type user success',
    props<{getAllActivityTaskResponse: IGetAllActivityTasksResponse}>()
);

export const createActivityTask = createAction(
    '[ActivityTask] create type user', 
    props<{createActivityTaskRequest: ICreateActivityTaskRequest}>()
);

export const createActivityTaskSuccess = createAction(
    '[ActivityTask] create type user success',
    props<{createActivityTaskResponse: ICreateActivityTaskResponse}>()
);

export const updateActivityTask = createAction(
    '[ActivityTask] update type user',
    props<{updateActivityTaskRequest: IUpdateActivityTaskRequest }>()
);

export const updateActivityTaskSuccess = createAction(
    '[ActivityTask] update type user success',
    props<{updateActivityTaskResponse: IUpdateActivityTaskResponse }>()
);

export const deleteActivityTask = createAction(
    '[ActivityTask] delete type user', 
    props<{deleteActivityTaskRequest: IDeleteActivityTaskRequest}>()
);

export const deleteActivityTaskSuccess = createAction(
    '[ActivityTask] delete type user success', 
    props<{deleteActivityTaskResponse: IDeleteActivityTaskResponse}>()
);

export const onError = createAction(
    '[ActivityTask] On error request success',
    props<{error: any}>()
);