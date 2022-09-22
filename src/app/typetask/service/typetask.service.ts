import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICreateTypeTaskRequest } from 'src/app/core/dtos/typetask/createtypetaskrequest';
import { IDeleteTypeTaskRequest } from 'src/app/core/dtos/typetask/deletetypetaskrequest';
import { IUpdateTypeTaskRequest } from 'src/app/core/dtos/typetask/updatetypetaskrequest';
import { createTypeTask, updateTypeTask, deleteTypeTask, getAllTypeTask } from '../redux/typetask.actions';
import { State } from '../redux/typetask.reducer';
import { getStateTypeTask } from '../redux/typetask.selectors';
import { ITypeTaskService } from './itypetask.service';

@Injectable({
  providedIn: 'root'
})
export class TypeTaskService implements ITypeTaskService {

  constructor(private store: Store<State>) { }
  add(createTypeTaskRequest: ICreateTypeTaskRequest): void {
    this.store.dispatch(createTypeTask({ createTypeTaskRequest }));
  }

  update(updateTypeTaskRequest: IUpdateTypeTaskRequest): void {
    this.store.dispatch(updateTypeTask({ updateTypeTaskRequest }))
  }
  delete(deleteTypeTaskRequest: IDeleteTypeTaskRequest): void {
    this.store.dispatch(deleteTypeTask({ deleteTypeTaskRequest }));
  }

  getState(): Observable<State> {
    return this.store.pipe(select(getStateTypeTask));
  }

  getAllTypeTasks(): void {
    this.store.dispatch(getAllTypeTask())
  }
}
