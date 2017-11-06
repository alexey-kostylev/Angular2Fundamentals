import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs/Rx";
import { IEvent, ISession } from "./event.model";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";

@Injectable()

export class EventService {

    readonly baseUrl: string = 'http://localhost/Angular2FundamentalsApi/api/events/';

    constructor(private http: Http) {

    }
    getEvents(): Observable<IEvent[]> {
        return this.http.get(this.baseUrl).map((response: Response) => {
            return <IEvent[]>response.json();
        }).catch(this.handleError);
    }

    getEvent(id: number): Observable<IEvent> {
        return this.http.get(this.baseUrl + id)
            .map((x: Response) => {
                return x.json();
            });
    }

    saveEvent(event: IEvent): Observable<number> {
        const url = this.baseUrl;

        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        return this.http.post(url, event, <RequestOptions>{
            headers: headers
        })
            .map(item => item.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateEvent(event: IEvent) {
        const url = this.baseUrl + event.id;

        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        return this.http.put(url, event, <RequestOptions>{
            headers: headers
        })
            .map(item => item.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
        const params = new URLSearchParams();
        params.append('sessionName', searchTerm);

        const url = this.baseUrl + 'sessions/search';
        return this.http.get(url, {
            search: params
        })
            .map(x => x.json())
            .catch(error => {
                return Observable.throw(new Error(error.status));
            });
    }
}

