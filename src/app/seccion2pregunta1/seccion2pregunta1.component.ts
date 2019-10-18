import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion2pregunta1',
  templateUrl: './seccion2pregunta1.component.html',
  styleUrls: ['./seccion2pregunta1.component.css']
})
export class Seccion2pregunta1Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
