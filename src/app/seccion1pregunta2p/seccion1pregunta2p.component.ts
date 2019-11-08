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
    this.router.navigate(['']);
  }

  guardarRespuesta(respuesta){
    localStorage.setItem( 'respuesta11', respuesta);
    this.router.navigate(['/seccion2pregunta2p']);
    }
}
