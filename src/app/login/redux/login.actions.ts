import { createAction, props } from '@ngrx/store';
import { ILoginUserApplicationResponse } from 'src/app/core/dtos/login/iloginapplicationresponse';
import { ILogin } from 'src/app/core/models/ilogin.model';

export const login = createAction(
  '[Login] Login',
  props<{login: ILogin}>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: ILoginUserApplicationResponse }>()
);

export const onError = createAction(
  '[Login] On Error',
  props<{ error: any }>()
);