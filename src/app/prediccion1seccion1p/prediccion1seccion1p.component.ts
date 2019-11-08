import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion1seccion1p',
  templateUrl: './prediccion1seccion1p.component.html',
  styleUrls: ['./prediccion1seccion1p.component.css']
})
export class Prediccion1seccion1pComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
