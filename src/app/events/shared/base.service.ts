import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseService {
    constructor() { }
    ErrorHandler(error): Observable<any> {
        return Observable.of(error);
    }
}
