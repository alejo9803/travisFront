import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion2pregunta2p',
  templateUrl: './seccion2pregunta2p.component.html',
  styleUrls: ['./seccion2pregunta2p.component.css']
})
export class Seccion2pregunta2pComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }

  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta6', respuesta);
    this.router.navigate(['/seccion2pregunta3p']);
    }
    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta6', respuesta);
      this.router.navigate(['/seccion2pregunta3p']);
      }

      reiniciar():void{
        for(var i=2;i<=6;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}
