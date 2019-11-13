import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Pregunta } from './Pregunta';
import { Paciente } from './Paciente';
import { Observable } from 'rxjs';
import { Pregunta_Paciente } from './Pregunta_Paciente';
import { Historia } from './Historia';
import { Contador } from './Contador'
import { Psicologo } from './Psicologo';

@Injectable({
    providedIn: 'root',
})
export class AdminService{
    
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http){}

    getPreguntas(i:number): Promise<Pregunta> {
        var resultado = this.http.get('https://localhost:8000/pregunta/'+i+'?format=json', {headers: this.headers}).toPromise()
        .then(response=> response.json() as Pregunta)        
        return resultado
    }

    getPaciente(i:number): Promise<Paciente> {
        var resultado = this.http.get('https://localhost:8000/paciente/'+i+'?format=json', {headers: this.headers})
        .toPromise()
        .then(response=> response.json() as Paciente)
        
        return resultado
    }

    getPsicologo(i:number): Promise<Psicologo> {
        var resultado = this.http.get('https://proyectopredictmind.herokuapp.com/psicologo/'+i+'?format=json', {headers: this.headers})
        .toPromise()
        .then(response=> response.json() as Psicologo)
        
        return resultado
    }

    createPregunta_Paciente(p: Pregunta_Paciente): Promise<Pregunta_Paciente>{
        return this.http
        .post("https://localhost:8000/pregunta_paciente", JSON.stringify(p), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Pregunta_Paciente)

    }

    createHistoria(h: Historia): Promise<Historia>{
        return this.http
        .post("https://localhost:8000/historia", JSON.stringify(h), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Historia)

    }

    getContador():Promise<Contador>{
        var resultado=this.http.get('https://localhost:8000/contador/1?format=json', {headers:this.headers})
        .toPromise()
        .then(response=>response.json() as Contador)

        return resultado
    }

    updateContador(contador:Contador):Promise<Contador>{
        var resultado=this.http.put('https://localhost:8000/contador/1?format=json', contador, {headers:this.headers})
        .toPromise()
        .then(response => response.json() as Contador)

        return resultado
    }
}