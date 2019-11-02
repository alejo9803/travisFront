import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1pregunta2',
  templateUrl: './seccion1pregunta2.component.html',
  styleUrls: ['./seccion1pregunta2.component.css']
})
export class Seccion1pregunta2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}