import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion2seccion1pno',
  templateUrl: './prediccion2seccion1pno.component.html',
  styleUrls: ['./prediccion2seccion1pno.component.css']
})
export class Prediccion2seccion1pnoComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
