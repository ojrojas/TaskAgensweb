import { Observable } from 'rxjs';
import { ICreateTaskApplicationRequest } from 'src/app/core/dtos/taskapplication/icreatetaskapplicationrequest';
import { IDeleteTaskApplicationRequest } from 'src/app/core/dtos/taskapplication/ideletetaskapplicationrequest';
import { IUpdateTaskApplicationRequest } from 'src/app/core/dtos/taskapplication/iupdatetaskapplicationrequest';
import { State } from '../redux/taskapplication.reducer';

export interface ITaskApplicationService {
    getState(): Observable<State>;
    getAllTaskApplications(): void;
    add(createTaskApplicationRequest: ICreateTaskApplicationRequest): void;
    update(updateTaskApplicationRequest:IUpdateTaskApplicationRequest):void;
    delete(deleteTaskApplicationRequest:IDeleteTaskApplicationRequest): void;
}