import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICreateTaskApplicationRequest } from 'src/app/core/dtos/taskapplication/icreatetaskapplicationrequest';
import { IDeleteTaskApplicationRequest } from 'src/app/core/dtos/taskapplication/ideletetaskapplicationrequest';
import { IUpdateTaskApplicationRequest } from 'src/app/core/dtos/taskapplication/iupdatetaskapplicationrequest';
import { createTaskApplication, updateTaskApplication, deleteTaskApplication, getAllTaskApplication } from '../redux/taskapplication.actions';
import { State } from '../redux/taskapplication.reducer';
import { getStateTaskApplication } from '../redux/taskapplication.selectors';
import { ITaskApplicationService } from './itaskapplication.service';

@Injectable({
  providedIn: 'root'
})
export class TaskApplicationService implements ITaskApplicationService {

  constructor(private store: Store<State>) { }
  add(createTaskApplicationRequest: ICreateTaskApplicationRequest): void {
    this.store.dispatch(createTaskApplication({ createTaskApplicationRequest }));
  }

  update(updateTaskApplicationRequest: IUpdateTaskApplicationRequest): void {
    this.store.dispatch(updateTaskApplication({ updateTaskApplicationRequest }))
  }
  delete(deleteTaskApplicationRequest: IDeleteTaskApplicationRequest): void {
    this.store.dispatch(deleteTaskApplication({ deleteTaskApplicationRequest }));
  }

  getState(): Observable<State> {
    return this.store.pipe(select(getStateTaskApplication));
  }

  getAllTaskApplications(): void {
    this.store.dispatch(getAllTaskApplication())
  }
}
