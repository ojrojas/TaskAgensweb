import { IBaseEntity } from "./ibaseentity";
import { ITypeUser } from "./itypeuser.model";

export interface IUser extends IBaseEntity{
    firstName:string;
    middlename:string | undefined;
    lastName:string;
    surName:string | undefined;
    identification:string;
    typeUser?:ITypeUser;
    typeUserId: string | undefined;
}