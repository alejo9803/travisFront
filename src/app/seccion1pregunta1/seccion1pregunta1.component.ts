import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1pregunta1',
  templateUrl: './seccion1pregunta1.component.html',
  styleUrls: ['./seccion1pregunta1.component.css']
})
export class Seccion1pregunta1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
