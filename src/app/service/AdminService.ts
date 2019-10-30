import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Pregunta } from './Pregunta';

@Injectable({
    providedIn: 'root',
})
export class AdminService{
    
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http){}

    getPreguntas(): Promise<Pregunta[]> {
        return this.http.get('http://localhost:8000/pregunta/1234?format=json', {headers: this.headers})
        .toPromise()
        .then(response=> response.json() as Pregunta[])
    }
}

