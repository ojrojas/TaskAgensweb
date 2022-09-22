import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { ICreateTypeUserResponse } from "src/app/core/dtos/typeuser/createtypeuserresponse";
import { IDeleteTypeUserResponse } from "src/app/core/dtos/typeuser/deletetypeuserresponse";
import { IGetAllTypeUsersResponse } from "src/app/core/dtos/typeuser/getalltypeusersresponse";
import { IUpdateTypeUserResponse } from "src/app/core/dtos/typeuser/updatetypeuserresponse";
import { RouteApiConstantsIdentity } from "src/app/core/enums/routeapi.constants";
import { ApiService } from "src/app/core/services/api.service";
import { ITypeUserService } from "../service/itypeuser.service";
import { TypeUserService } from "../service/typeuser.service";
import * as fromActions from './typeuser.actions';

@Injectable()
export class TypeUserEffects {

    getAllTypeUser$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.getAllTypeUser),
            concatMap(() => this.api.get<IGetAllTypeUsersResponse>(RouteApiConstantsIdentity.typeuser.getalltypeuser).pipe(
                map(response =>  fromActions.getAllTypeUserSuccess({ getAllTypeUserResponse : response.body as IGetAllTypeUsersResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createTypeUser$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.createTypeUser),
            concatMap((props) => this.api.post<ICreateTypeUserResponse>(RouteApiConstantsIdentity.typeuser.createtypeuser, props.createTypeUserRequest).pipe(
                map(response =>  fromActions.createTypeUserSuccess({ createTypeUserResponse : response.body as ICreateTypeUserResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    updateTypeUser$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.updateTypeUser),
            concatMap((props) => this.api.patch<IUpdateTypeUserResponse>(RouteApiConstantsIdentity.typeuser.updatetypeuser, props.updateTypeUserRequest).pipe(
                map(response =>  fromActions.updateTypeUserSuccess({ updateTypeUserResponse : response.body as IUpdateTypeUserResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    deleteTypeUser$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(fromActions.deleteTypeUser),
            concatMap((props) => this.api.delete<IDeleteTypeUserResponse>(RouteApiConstantsIdentity.typeuser.deletetypeuser +'/'+ props.deleteTypeUserRequest.typeUser.id).pipe(
                map(response =>  fromActions.deleteTypeUserSuccess({ deleteTypeUserResponse : response.body as IDeleteTypeUserResponse })),
                catchError(error => of(fromActions.onError({error})))
            ))
        )
    });

    createTypeUserSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.createTypeUserSuccess),
            tap((props) => {
                if (props.createTypeUserResponse !== null) {
                    this.service.getAllTypeUsers();
                }
            })
        );
    }, { dispatch: false });

    updateTypeUserSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.updateTypeUserSuccess),
            tap((props) => {
                if (props.updateTypeUserResponse !== null) {
                    this.service.getAllTypeUsers();
                }
            })
        );
    }, { dispatch: false });

    deleteTypeUserSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.deleteTypeUserSuccess),
            tap((props) => {
                if (props.deleteTypeUserResponse !== null) {
                    this.service.getAllTypeUsers();
                }
            })
        );
    }, { dispatch: false });

    constructor(
        private actions$: Actions,
        @Inject(TypeUserService) private service: ITypeUserService,
        private api: ApiService) {}
}