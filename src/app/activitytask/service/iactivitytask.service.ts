import { Observable } from 'rxjs';
import { ICreateActivityTaskRequest } from 'src/app/core/dtos/activitytask/icreateactivitytaskrequest';
import { IDeleteActivityTaskRequest } from 'src/app/core/dtos/activitytask/ideleteactivitytaskrequest';
import { IUpdateActivityTaskRequest } from 'src/app/core/dtos/activitytask/iupdateactivitytaskrequest';
import { State } from '../redux/activitytask.reducer';

export interface IActivityTaskService {
    getState(): Observable<State>;
    getAllActivityTasks(): void;
    add(createActivityTaskRequest: ICreateActivityTaskRequest): void;
    update(updateActivityTaskRequest:IUpdateActivityTaskRequest):void;
    delete(deleteActivityTaskRequest:IDeleteActivityTaskRequest): void;
}