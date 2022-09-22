import { Observable } from "rxjs";
import { HttpResponse } from '@angular/common/http';
import { IDictionary } from "../models/idictionary";

export interface IRequestService {
    get<T>(routeApi: string, params: IDictionary[]): Observable<HttpResponse<T>>;
    post<T>(routeApi: string, body: any): Observable<HttpResponse<T>>;
    put<T>(routeApi: string, body: any): Observable<HttpResponse<T>>;
    delete<T>(routeApi: string, body: any): Observable<HttpResponse<T>>;
    deleteParams<T>(routeApi:  string, params: IDictionary[]): Observable<HttpResponse<T>>
    patch<T>(routeApi: string, body: any): Observable<HttpResponse<T>>;
}