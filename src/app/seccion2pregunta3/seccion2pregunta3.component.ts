import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion2pregunta3',
  templateUrl: './seccion2pregunta3.component.html',
  styleUrls: ['./seccion2pregunta3.component.css']
})
export class Seccion2pregunta3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
