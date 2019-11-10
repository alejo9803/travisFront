import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';

@Component({
  selector: 'app-seccion2pregunta1',
  templateUrl: './seccion2pregunta1.component.html',
  styleUrls: ['./seccion2pregunta1.component.css']
})
export class Seccion2pregunta1Component implements OnInit {
  constructor(private router: Router, private AdminService:AdminService) {
    this.getPregunta()
   }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

<<<<<<< HEAD
  guardarRespuesta(respuesta){
    localStorage.setItem( 'respuesta5', respuesta);
      this.router.navigate(['/seccion2pregunta2']);
  }
    

  getPregunta():void{
     this.AdminService.getPreguntas(5).then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
       
     })
     
  }
=======
  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta11', respuesta);
    this.router.navigate(['/seccion2pregunta2']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta11', respuesta);
      this.router.navigate(['/prediccion3seccion1']);
      }
>>>>>>> 7b792524f453bb006604cd55931636d93866eccc
}
