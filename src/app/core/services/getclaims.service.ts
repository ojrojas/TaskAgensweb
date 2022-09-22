import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IClaimService } from "../interfaces/igetclaims.interface";
import { IUser } from "../models/iuser.model";

@Injectable({
    providedIn: 'root'
})
export class ClaimService implements IClaimService {

    GetClaims(token: any): Observable<IUser> {
        let tokenAssigned = token;
        const userInfo = JSON.parse(atob(tokenAssigned.split('.')[1]));
        const user = new Observable<IUser>((observer) => {
            try {
                let user: IUser = {
                    id: userInfo.Id,
                    firstName: userInfo.FirstName,
                    middlename: userInfo.middleName,
                    lastName: userInfo.LastName,
                    surName: userInfo.SurName,
                    typeUser: userInfo.TypeUser,
                    typeUserId: userInfo.typeUserId,
                    identification: userInfo.Identification,
                    createdOn: userInfo.CreatedOn,
                    modifiedOn: userInfo.ModifiedOn,
                    createdBy: userInfo.CreatedBy,
                    modifiedBy: userInfo.ModifiedBy
                };
                observer.next(user);
            } catch (error) {
                console.error("Error getclaims ==> ", error);
                observer.next(undefined);
            }
        });
        return user;
    }
}