import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService';


import { Pregunta_Paciente } from '../service/Pregunta_Paciente'
import { Historia } from '../service/Historia';
import { Pregunta } from '../service/Pregunta';
import { Contador } from '../service/Contador';
import { Paciente } from '../service/Paciente';


@Component({
  selector: 'app-prediccion2seccion2',
  templateUrl: './prediccion2seccion2.component.html',
  styleUrls: ['./prediccion2seccion2.component.css']
})
export class Prediccion2seccion2Component implements OnInit {

  constructor(private router: Router, private AdminService:AdminService ) {
    
    
    
    
  }

  ngOnInit() {
  }
  logout(){
    
    this.reiniciar();
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  
  

  

  reiniciar():void{
    for(var i=2;i<=7;i++){
      localStorage.removeItem('respuesta'+i);
    }
  }

}
