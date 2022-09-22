import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICreateTypeUserRequest } from 'src/app/core/dtos/typeuser/createtypeuserrequest';
import { IDeleteTypeUserRequest } from 'src/app/core/dtos/typeuser/deletetypeuserrequest';
import { IUpdateTypeUserRequest } from 'src/app/core/dtos/typeuser/updatetypeuserrequest';
import { createTypeUser, deleteTypeUser, getAllTypeUser, updateTypeUser } from '../redux/typeuser.actions';
import { State } from '../redux/typeuser.reducer';
import { getStateTypeUser } from '../redux/typeuser.selectors';
import { ITypeUserService } from './itypeuser.service';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService implements ITypeUserService {

  constructor(private store: Store<State>) { }
  add(createTypeUserRequest: ICreateTypeUserRequest): void {
    this.store.dispatch(createTypeUser({ createTypeUserRequest }));
  }

  update(updateTypeUserRequest: IUpdateTypeUserRequest): void {
    this.store.dispatch(updateTypeUser({ updateTypeUserRequest }))
  }
  delete(deleteTypeUserRequest: IDeleteTypeUserRequest): void {
    this.store.dispatch(deleteTypeUser({ deleteTypeUserRequest }));
  }

  getState(): Observable<State> {
    return this.store.pipe(select(getStateTypeUser));
  }

  getAllTypeUsers(): void {
    this.store.dispatch(getAllTypeUser())
  }
}
