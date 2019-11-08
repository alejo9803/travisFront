import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion3seccion1pno',
  templateUrl: './prediccion3seccion1pno.component.html',
  styleUrls: ['./prediccion3seccion1pno.component.css']
})
export class Prediccion3seccion1pnoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
