import { createAction, props } from "@ngrx/store";
import { ICreateTypeUserRequest } from "src/app/core/dtos/typeuser/createtypeuserrequest";
import { ICreateTypeUserResponse } from "src/app/core/dtos/typeuser/createtypeuserresponse";
import { IDeleteTypeUserRequest } from "src/app/core/dtos/typeuser/deletetypeuserrequest";
import { IDeleteTypeUserResponse } from "src/app/core/dtos/typeuser/deletetypeuserresponse";
import { IGetAllTypeUsersResponse } from "src/app/core/dtos/typeuser/getalltypeusersresponse";
import { IUpdateTypeUserRequest } from "src/app/core/dtos/typeuser/updatetypeuserrequest";
import { IUpdateTypeUserResponse } from "src/app/core/dtos/typeuser/updatetypeuserresponse";

export const getAllTypeUser = createAction(
    '[TypeUser] get all type user'
);

export const getAllTypeUserSuccess = createAction(
    '[TypeUser] get all type user success',
    props<{getAllTypeUserResponse: IGetAllTypeUsersResponse}>()
);

export const createTypeUser = createAction(
    '[TypeUser] create type user', 
    props<{createTypeUserRequest: ICreateTypeUserRequest}>()
);

export const createTypeUserSuccess = createAction(
    '[TypeUser] create type user success',
    props<{createTypeUserResponse: ICreateTypeUserResponse}>()
);

export const updateTypeUser = createAction(
    '[TypeUser] update type user',
    props<{updateTypeUserRequest: IUpdateTypeUserRequest }>()
);

export const updateTypeUserSuccess = createAction(
    '[TypeUser] update type user success',
    props<{updateTypeUserResponse: IUpdateTypeUserResponse }>()
);

export const deleteTypeUser = createAction(
    '[TypeUser] delete type user', 
    props<{deleteTypeUserRequest: IDeleteTypeUserRequest}>()
);

export const deleteTypeUserSuccess = createAction(
    '[TypeUser] delete type user success', 
    props<{deleteTypeUserResponse: IDeleteTypeUserResponse}>()
);

export const onError = createAction(
    '[TypeUser] On error request success',
    props<{error: any}>()
);