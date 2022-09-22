import { Observable } from 'rxjs';
import { ICreateTypeUserRequest } from 'src/app/core/dtos/typeuser/createtypeuserrequest';
import { IDeleteTypeUserRequest } from 'src/app/core/dtos/typeuser/deletetypeuserrequest';
import { IUpdateTypeUserRequest } from 'src/app/core/dtos/typeuser/updatetypeuserrequest';
import { State } from '../redux/typeuser.reducer';

export interface ITypeUserService {
    getState(): Observable<State>;
    getAllTypeUsers(): void;
    add(createTypeUserRequest: ICreateTypeUserRequest): void;
    update(updateTypeUserRequest:IUpdateTypeUserRequest):void;
    delete(deleteTypeUserRequest:IDeleteTypeUserRequest): void;
}