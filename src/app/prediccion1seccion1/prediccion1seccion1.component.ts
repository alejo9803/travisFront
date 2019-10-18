import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccionseccion1',
  templateUrl: './prediccion1seccion1.component.html',
  styleUrls: ['./prediccion1seccion1.component.css']
})
export class Prediccion1seccion1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
