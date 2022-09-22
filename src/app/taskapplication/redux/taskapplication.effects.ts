import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { ICreateTaskApplicationResponse } from "src/app/core/dtos/taskapplication/icreatetaskapplicationresponse";
import { IDeleteTaskApplicationResponse } from "src/app/core/dtos/taskapplication/ideletetaskapplicationresponse";
import { IGetAllTaskApplicationResponse } from "src/app/core/dtos/taskapplication/igetalltaskapplicationresponse";
import { IGetTaskApplicationByIdResponse } from "src/app/core/dtos/taskapplication/igettaskapplicationbyidresponse";
import { IUpdateTaskApplicationResponse } from "src/app/core/dtos/taskapplication/iupdatetaskapplicationresponse";
import { RouteApiConstantsAgents } from "src/app/core/enums/routeapi.constants";
import { ApiService } from "src/app/core/services/api.service";
import { ITaskApplicationService } from "../service/itaskapplication.service";
import { TaskApplicationService } from "../service/taskapplication.service";
import * as fromActions from './taskapplication.actions';

@Injectable()
export class TaskApplicationEffects {

    getAllTaskApplication$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.getAllTaskApplication),
            concatMap(() => this.api.get<IGetAllTaskApplicationResponse>(RouteApiConstantsAgents.taskapplication.getAlltaskapplication).pipe(
                map(response =>  fromActions.getAllTaskApplicationSuccess({ getAllTaskApplicationResponse : response.body as IGetAllTaskApplicationResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createTaskApplication$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.createTaskApplication),
            concatMap((props) => this.api.post<ICreateTaskApplicationResponse>(RouteApiConstantsAgents.taskapplication.createtaskapplication, props.createTaskApplicationRequest).pipe(
                map(response =>  fromActions.createTaskApplicationSuccess({ createTaskApplicationResponse : response.body as ICreateTaskApplicationResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    updateTaskApplication$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.updateTaskApplication),
            concatMap((props) => this.api.patch<IUpdateTaskApplicationResponse>(RouteApiConstantsAgents.taskapplication.updatetaskapplication, props.updateTaskApplicationRequest).pipe(
                map(response =>  fromActions.updateTaskApplicationSuccess({ updateTaskApplicationResponse : response.body as IUpdateTaskApplicationResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    deleteTaskApplication$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.deleteTaskApplication),
            concatMap((props) => this.api.delete<IDeleteTaskApplicationResponse>(RouteApiConstantsAgents.taskapplication.deletetaskapplication  +'/'+ props.deleteTaskApplicationRequest.taskApplication.id).pipe(
                map(response =>  fromActions.deleteTaskApplicationSuccess({ deleteTaskApplicationResponse : response.body as IDeleteTaskApplicationResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    getTaskApplicationById$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.getTaskApplicationById),
            concatMap((props) => this.api.get<IGetTaskApplicationByIdResponse>(RouteApiConstantsAgents.taskapplication.deletetaskapplication  +'/'+ props.getTaskApplicationByIdRequest.id).pipe(
                map(response =>  fromActions.getTaskApplicationSuccessById({ getTaskApplicationByIdResponse : response.body as IGetTaskApplicationByIdResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createTaskApplicationSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.createTaskApplicationSuccess),
            tap((props) => {
                if (props.createTaskApplicationResponse !== null) {
                    this.service.getAllTaskApplications();
                }
            })
        );
    }, { dispatch: false });

    updateTaskApplicationSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.updateTaskApplicationSuccess),
            tap((props) => {
                if (props.updateTaskApplicationResponse !== null) {
                    this.service.getAllTaskApplications();
                }
            })
        );
    }, { dispatch: false });

    deleteTaskApplicationSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.deleteTaskApplicationSuccess),
            tap((props) => {
                if (props.deleteTaskApplicationResponse !== null) {
                    this.service.getAllTaskApplications();
                }
            })
        );
    }, { dispatch: false });

    constructor(
        private actions$: Actions,
        @Inject(TaskApplicationService) private service: ITaskApplicationService,
        private api: ApiService) {}
}