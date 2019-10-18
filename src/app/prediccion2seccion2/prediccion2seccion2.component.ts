import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion2seccion2',
  templateUrl: './prediccion2seccion2.component.html',
  styleUrls: ['./prediccion2seccion2.component.css']
})
export class Prediccion2seccion2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
