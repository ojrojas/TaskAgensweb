import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { ICreateTypeTaskResponse } from "src/app/core/dtos/typetask/createtypetaskresponse";
import { IDeleteTypeTaskResponse } from "src/app/core/dtos/typetask/deletetypetaskresponse";
import { IGetAllTypeTaskResponse } from "src/app/core/dtos/typetask/getalltypetaskresponse";
import { IUpdateTypeTaskResponse } from "src/app/core/dtos/typetask/updatetypetaskresponse";
import { RouteApiConstantsAgents } from "src/app/core/enums/routeapi.constants";
import { ApiService } from "src/app/core/services/api.service";
import { ITypeTaskService } from "../service/itypetask.service";
import { TypeTaskService } from "../service/typetask.service";
import * as fromActions from './typetask.actions';

@Injectable()
export class TypeTaskEffects {

    getAllTypeTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.getAllTypeTask),
            concatMap(() => this.api.get<IGetAllTypeTaskResponse>(RouteApiConstantsAgents.typetask.getalltypetask).pipe(
                map(response =>  fromActions.getAllTypeTaskSuccess({ getAllTypeTaskResponse : response.body as IGetAllTypeTaskResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createTypeTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.createTypeTask),
            concatMap((props) => this.api.post<ICreateTypeTaskResponse>(RouteApiConstantsAgents.typetask.createtypetask, props.createTypeTaskRequest).pipe(
                map(response =>  fromActions.createTypeTaskSuccess({ createTypeTaskResponse : response.body as ICreateTypeTaskResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    updateTypeTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.updateTypeTask),
            concatMap((props) => this.api.patch<IUpdateTypeTaskResponse>(RouteApiConstantsAgents.typetask.updatetypetask, props.updateTypeTaskRequest).pipe(
                map(response =>  fromActions.updateTypeTaskSuccess({ updateTypeTaskResponse : response.body as IUpdateTypeTaskResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    deleteTypeTask$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.deleteTypeTask),
            concatMap((props) => this.api.delete<IDeleteTypeTaskResponse>(RouteApiConstantsAgents.typetask.deletetypetask  +'/'+ props.deleteTypeTaskRequest.typeTask.id).pipe(
                map(response =>  fromActions.deleteTypeTaskSuccess({ deleteTypeTaskResponse : response.body as IDeleteTypeTaskResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createTypeTaskSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.createTypeTaskSuccess),
            tap((props) => {
                if (props.createTypeTaskResponse !== null) {
                    this.service.getAllTypeTasks();
                }
            })
        );
    }, { dispatch: false });

    updateTypeTaskSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.updateTypeTaskSuccess),
            tap((props) => {
                if (props.updateTypeTaskResponse !== null) {
                    this.service.getAllTypeTasks();
                }
            })
        );
    }, { dispatch: false });

    deleteTypeTaskSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.deleteTypeTaskSuccess),
            tap((props) => {
                if (props.deleteTypeTaskResponse !== null) {
                    this.service.getAllTypeTasks();
                }
            })
        );
    }, { dispatch: false });

    constructor(
        private actions$: Actions,
        @Inject(TypeTaskService) private service: ITypeTaskService,
        private api: ApiService) {}
}