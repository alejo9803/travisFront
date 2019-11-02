import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Pregunta } from './Pregunta';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AdminService{
    
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http){}

    getPreguntas(): Promise<Pregunta> {
        var resultado = this.http.get('http://localhost:8000/pregunta/2?format=json', {headers: this.headers}).toPromise()
        .then(response=> response.json() as Pregunta)        
        return resultado
    }

    create(pregunta:Pregunta): Observable<Pregunta> {   
        return this.http.post(this.urlEndPoint, pregunta, {})
    }
}

