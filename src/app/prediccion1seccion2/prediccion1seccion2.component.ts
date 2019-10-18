import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion1seccion2',
  templateUrl: './prediccion1seccion2.component.html',
  styleUrls: ['./prediccion1seccion2.component.css']
})
export class Prediccion1seccion2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
