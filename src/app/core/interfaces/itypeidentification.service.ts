import { Observable } from "rxjs";
import { State } from "src/app/typeidentification/redux/typeidentificacion.reducer";
import { ICreateTypeIdentificationRequest } from "../dtos/typetask/createtypetaskrequest";
import { IDeleteTypeIdentificacionRequest } from "../dtos/typetask/deletetypetaskrequest";
import { IUpdateTypeIdentificacionRequest } from "../dtos/typetask/updatetypetaskrequest";

export interface ITypeIdentificationService {
    getAllList: () => void;
    getState: () => Observable<State>;
    add: (createTypeIdentificationRequest: ICreateTypeIdentificationRequest) => void;
    delete: (deleteTypeIdentificationRequest: IDeleteTypeIdentificacionRequest) => void;
    update: (updateTypeIdentificationRequest: IUpdateTypeIdentificacionRequest) => void;
}