import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IUser } from "src/app/core/models/iuser.model";
import { State } from "../redux/auth.reducer";
import * as fromActions from '../redux/auth.actions';
import { Observable } from "rxjs";
import { getApplicationUser } from "../redux/auth.selector";
import { IAuthService } from "./iauth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService implements IAuthService {
    constructor(private store: Store<State>) { }

    setClaims( token: string): void {
        this.store.dispatch(fromActions.setClaimsAuth({ token }));
    }

    logOut(): void {
        this.store.dispatch(fromActions.logOutAuth());
    }

    getUserInfo() : Observable<IUser | undefined>{
        return this.store.pipe(select(getApplicationUser));
    }
}
