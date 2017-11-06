import { Injectable } from '@angular/core';
import { ISession, BaseService } from '.';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VoterService extends BaseService {

    readonly baseUrl: string = 'http://localhost/Angular2FundamentalsApi/api/events/sessions';

    constructor(private http: Http) {
        super();
    }

    // http://localhost/Angular2FundamentalsApi/api/events/sessions/:sessionId/voters?voterName=alexey
    deleteVoter(session: ISession, user: string) {
        const url = `${this.baseUrl}/${session.id}/voters`;

        const searchParams = new URLSearchParams();
        searchParams.append('voterName', user);

        this.http.delete(url, { params: searchParams })
            .catch(this.ErrorHandler);
    }

    // http://localhost/Angular2FundamentalsApi/api/events/sessions/:sessionId/voters
    // voterName=alexey
    addVoter(session: ISession, user: string) {
        const url = `${this.baseUrl}/${session.id}/voters`;

        const searchParams = new URLSearchParams();
        searchParams.append('voterName', user);
        const body = '\'user\'';
        this.http.post(url, body, url)
            .catch(this.ErrorHandler);
    }

    // http://localhost/Angular2FundamentalsApi/api/events/sessions/:sessionId/voters/hasvoted?voterName=alexey
    userHasVoted(session: ISession, userName: string): Observable<boolean> {
        const url = `${this.baseUrl}/${session.id}/voters/hasvoted`;

        const searchParams = new URLSearchParams();
        searchParams.append('voterName', userName);

        return this.http.get(url, { params: searchParams })
            .map(data => {
                const val = !!data;
                return val;
            })
            .catch(this.ErrorHandler);
    }
}
