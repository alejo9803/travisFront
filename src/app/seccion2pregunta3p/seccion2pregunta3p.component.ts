import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion2pregunta3p',
  templateUrl: './seccion2pregunta3p.component.html',
  styleUrls: ['./seccion2pregunta3p.component.css']
})
export class Seccion2pregunta3pComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }

  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta7', respuesta);
    this.router.navigate(['/prediccion1seccion2p']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta7', respuesta);
      this.router.navigate(['/prediccion1seccion2p']);
      }

      reiniciar():void{
        for(var i=2;i<=7;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}
