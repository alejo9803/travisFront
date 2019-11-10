import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1pregunta1p',
  templateUrl: './seccion1pregunta1p.component.html',
  styleUrls: ['./seccion1pregunta1p.component.css']
})
export class Seccion1pregunta1pComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta11', respuesta);
    this.router.navigate(['/seccion1pregunta2p']);
    }
    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta11', respuesta);
      this.router.navigate(['/seccion1pregunta2p']);
      } 
}
