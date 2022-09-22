import { Observable } from 'rxjs';
import { ICreateTypeTaskRequest } from 'src/app/core/dtos/typetask/createtypetaskrequest';
import { IDeleteTypeTaskRequest } from 'src/app/core/dtos/typetask/deletetypetaskrequest';
import { IUpdateTypeTaskRequest } from 'src/app/core/dtos/typetask/updatetypetaskrequest';
import { State } from '../redux/typetask.reducer';

export interface ITypeTaskService {
    getState(): Observable<State>;
    getAllTypeTasks(): void;
    add(createTypeTaskRequest: ICreateTypeTaskRequest): void;
    update(updateTypeTaskRequest:IUpdateTypeTaskRequest):void;
    delete(deleteTypeTaskRequest:IDeleteTypeTaskRequest): void;
}