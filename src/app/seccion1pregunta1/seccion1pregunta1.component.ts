import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';

@Component({
  selector: 'app-seccion1pregunta1',
  templateUrl: './seccion1pregunta1.component.html',
  styleUrls: ['./seccion1pregunta1.component.css']
})
export class Seccion1pregunta1Component implements OnInit {

  constructor(private router: Router, private AdminService : AdminService) { 
    this.getPregunta()
<<<<<<< HEAD
=======
    // this.save()
>>>>>>> 7b792524f453bb006604cd55931636d93866eccc
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

<<<<<<< HEAD
  guardarRespuesta(respuesta){
    localStorage.setItem( 'respuesta2', respuesta);
=======
  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta11', respuesta);
>>>>>>> 7b792524f453bb006604cd55931636d93866eccc
    this.router.navigate(['/seccion1pregunta2']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta11', respuesta);
      this.router.navigate(['/prediccion2seccion1no']);
      }

  getPregunta():void{
     this.AdminService.getPreguntas(2).then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
       
     })
     
  }
}
