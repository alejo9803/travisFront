import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1pregunta2p',
  templateUrl: './seccion1pregunta2p.component.html',
  styleUrls: ['./seccion1pregunta2p.component.css']
})
export class Seccion1pregunta2pComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }

  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta3', respuesta);
    this.router.navigate(['/seccion1pregunta3p']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta3', respuesta);
      this.router.navigate(['/seccion1pregunta3p']);
      }

      reiniciar():void{
        for(var i=2;i<=3;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}
