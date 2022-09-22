import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ILoginUserApplicationResponse } from 'src/app/core/dtos/login/iloginapplicationresponse';
import { RouteApiConstantsIdentity } from 'src/app/core/enums/routeapi.constants';
import { ApiService } from 'src/app/core/services/api.service';
import * as fromActions from './login.actions';

@Injectable()
export class LoginEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.login),
            concatMap((props) => this.service.post<ILoginUserApplicationResponse>(RouteApiConstantsIdentity.userapplication.login, props.login).pipe(
                map(response => fromActions.loginSuccess({ token: response.body as ILoginUserApplicationResponse })),
                catchError(error => of(fromActions.onError({ error }))))
            )
        );
    });

    loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.loginSuccess),
            tap((props) => {
                if (props.token !== null) {
                    this.authService.setClaims(props.token.token);
                } else {

                }
                return;
            })
        );
    }, { dispatch: false });


    constructor(
        private actions$: Actions,
        private service: ApiService,
        private authService: AuthService) {
    }
}