import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion2pregunta2',
  templateUrl: './seccion2pregunta2.component.html',
  styleUrls: ['./seccion2pregunta2.component.css']
})
export class Seccion2pregunta2Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
