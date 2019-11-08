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
    this.getPregunta()
    this.save()
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

  getPregunta():void{
     this.AdminService.getPreguntas().then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
     })
     
  }

  pregunta = new Pregunta();

  save(): void{
    this.pregunta.idPregunta=13;
    this.pregunta.descripcion="no eres tu?";
    this.AdminService.createPregunta(this.pregunta);

  }


}
