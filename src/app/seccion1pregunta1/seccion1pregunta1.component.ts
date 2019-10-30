import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';
import { Pregunta } from '../service/Pregunta';

@Component({
  selector: 'app-seccion1pregunta1',
  templateUrl: './seccion1pregunta1.component.html',
  styleUrls: ['./seccion1pregunta1.component.css']
})
export class Seccion1pregunta1Component implements OnInit {

  constructor(private router: Router, private AdminService : AdminService) { 
    
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  guardarRespuesta(respuesta){
    localStorage.setItem( 'respuesta11', respuesta);
    this.router.navigate(['/seccion1pregunta2']);
    }

  Preguntas : Pregunta[]=[];
  
  Pregunta=new Pregunta();

  getPregunta():void{
     this.AdminService.getPreguntas().then(Preguntas => this.Preguntas= Preguntas)
  }

}
