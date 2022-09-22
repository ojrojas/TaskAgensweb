import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICreateActivityTaskRequest } from 'src/app/core/dtos/activitytask/icreateactivitytaskrequest';
import { IDeleteActivityTaskRequest } from 'src/app/core/dtos/activitytask/ideleteactivitytaskrequest';
import { IUpdateActivityTaskRequest } from 'src/app/core/dtos/activitytask/iupdateactivitytaskrequest';
import { createActivityTask, deleteActivityTask, getAllActivityTask, updateActivityTask } from '../redux/activitytask.actions';
import { State } from '../redux/activitytask.reducer';
import { getStateActivityTask } from '../redux/activitytask.selectors';
import { IActivityTaskService } from './iactivitytask.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityTaskService implements IActivityTaskService {

  constructor(private store: Store<State>) { }
  add(createActivityTaskRequest: ICreateActivityTaskRequest): void {
    this.store.dispatch(createActivityTask({ createActivityTaskRequest }));
  }

  update(updateActivityTaskRequest: IUpdateActivityTaskRequest): void {
    this.store.dispatch(updateActivityTask({ updateActivityTaskRequest }))
  }
  delete(deleteActivityTaskRequest: IDeleteActivityTaskRequest): void {
    this.store.dispatch(deleteActivityTask({ deleteActivityTaskRequest }));
  }

  getState(): Observable<State> {
    return this.store.pipe(select(getStateActivityTask));
  }

  getAllActivityTasks(): void {
    this.store.dispatch(getAllActivityTask())
  }
}
