import { Observable } from "rxjs";
import { IUser } from "src/app/core/models/iuser.model";

export interface IAuthService {
    setClaims( token: string): void;
    logOut(): void;
    getUserInfo() : Observable<IUser | undefined>;
}