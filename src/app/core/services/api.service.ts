import { HttpClient, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRequestService } from "../interfaces/irequest.interface";
import { IDictionary } from "../models/idictionary";

@Injectable({
    providedIn:'root'
})
export class ApiService implements IRequestService {

    constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

    get<T>(routeApi: string, params?: IDictionary[]): Observable<HttpResponse<T>> {
        return this.httpClient.get<T>(`${routeApi}/${params ?? ''}`, { observe: 'response' });
    }

    post<T>(routeApi:  string, body: any): Observable<HttpResponse<T>> {
        return this.httpClient.post<T>(`${routeApi}`, body, { observe: 'response' });
    }

    delete<T>(routeApi:  string): Observable<HttpResponse<T>> {
        return this.httpClient.delete<T>(`${routeApi}/`, { observe: 'response' });
    }

    put<T>(routeApi:  string, body: any): Observable<HttpResponse<T>> {
        return this.httpClient.put<T>(`${routeApi}`, body, { observe: 'response' });
    }

    deleteParams<T>(routeApi:  string, params: IDictionary[]): Observable<HttpResponse<T>> {
        return this.httpClient.delete<T>(`${routeApi}/${params ?? ''}`, { observe: 'response' });
    }

    patch<T>(routeApi:  string, body: any): Observable<HttpResponse<T>> {
        return this.httpClient.patch<T>(`${routeApi}`, body, { observe: 'response' });
    }
}