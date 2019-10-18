import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1pregunta3',
  templateUrl: './seccion1pregunta3.component.html',
  styleUrls: ['./seccion1pregunta3.component.css']
})
export class Seccion1pregunta3Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
