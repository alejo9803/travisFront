import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1pregunta3p',
  templateUrl: './seccion1pregunta3p.component.html',
  styleUrls: ['./seccion1pregunta3p.component.css']
})
export class Seccion1pregunta3pComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }
  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta4', respuesta);
    this.router.navigate(['/prediccion1seccion1p']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta4', respuesta);
      this.router.navigate(['/prediccion1seccion1p']);
}

reiniciar():void{
  for(var i=2;i<=4;i++){
    localStorage.removeItem('respuesta'+i);
  }
}
}
