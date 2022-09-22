import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { ICreateActivityTaskResponse } from "src/app/core/dtos/activitytask/icreateactivitytaskresponse";
import { IDeleteActivityTaskResponse } from "src/app/core/dtos/activitytask/ideleteactivitytaskresponse";
import { IGetAllActivityTasksResponse } from "src/app/core/dtos/activitytask/igetallactivityresponse";
import { IUpdateActivityTaskResponse } from "src/app/core/dtos/activitytask/iupdateactivitytaskresponse";
import { RouteApiConstantsAgents } from "src/app/core/enums/routeapi.constants";
import { ApiService } from "src/app/core/services/api.service";
import { ActivityTaskService } from "../service/activitytask.service";
import { IActivityTaskService } from "../service/iactivitytask.service";
import * as fromActions from './activitytask.actions';

@Injectable()
export class ActivityTaskEffects {

    getAllActivityTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.getAllActivityTask),
            concatMap(() => this.api.get<IGetAllActivityTasksResponse>(RouteApiConstantsAgents.activitytask.getallactivitytask).pipe(
                map(response =>  fromActions.getAllActivityTaskSuccess({ getAllActivityTaskResponse : response.body as IGetAllActivityTasksResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createActivityTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.createActivityTask),
            concatMap((props) => this.api.post<ICreateActivityTaskResponse>(RouteApiConstantsAgents.activitytask.createactivitytask, props.createActivityTaskRequest).pipe(
                map(response =>  fromActions.createActivityTaskSuccess({ createActivityTaskResponse : response.body as ICreateActivityTaskResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    updateActivityTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.updateActivityTask),
            concatMap((props) => this.api.patch<IUpdateActivityTaskResponse>(RouteApiConstantsAgents.activitytask.updateactivitytask, props.updateActivityTaskRequest).pipe(
                map(response =>  fromActions.updateActivityTaskSuccess({ updateActivityTaskResponse : response.body as IUpdateActivityTaskResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    deleteActivityTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.deleteActivityTask),
            concatMap((props) => this.api.delete<IDeleteActivityTaskResponse>(RouteApiConstantsAgents.activitytask.deleteactivitytask +'/'+ props.deleteActivityTaskRequest.activityTask.id).pipe(
                map(response =>  fromActions.deleteActivityTaskSuccess({ deleteActivityTaskResponse : response.body as IDeleteActivityTaskResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createActivityTaskSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.createActivityTaskSuccess),
            tap((props) => {
                if (props.createActivityTaskResponse !== null) {
                    this.service.getAllActivityTasks();
                }
            })
        );
    }, { dispatch: false });

    updateActivityTaskSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.updateActivityTaskSuccess),
            tap((props) => {
                if (props.updateActivityTaskResponse !== null) {
                    this.service.getAllActivityTasks();
                }
            })
        );
    }, { dispatch: false });

    deleteActivityTaskSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.deleteActivityTaskSuccess),
            tap((props) => {
                if (props.deleteActivityTaskResponse !== null) {
                    this.service.getAllActivityTasks();
                }
            })
        );
    }, { dispatch: false });

    constructor(
        private actions$: Actions,
        @Inject(ActivityTaskService) private service: IActivityTaskService,
        private api: ApiService) {}
}