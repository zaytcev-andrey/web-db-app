import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { SparePart } from './spare_part';

import './rxjs-operators';

@Injectable()
export class SparePartsService {
    private heroesUrl = 'api/spare_parts';  // URL to web API
    
    constructor ( private http: Http ) {}

    getHeroes(): Observable<SparePart[]>
    {
        return this.http.get( this.heroesUrl )
                    .map( (res:Response) => res.json() )
                    .catch( this.handleError );
    }

    private extractData( res: Response ) 
    {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) 
    {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}