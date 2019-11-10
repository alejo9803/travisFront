import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion1seccion1pno',
  templateUrl: './prediccion1seccion1pno.component.html',
  styleUrls: ['./prediccion1seccion1pno.component.css']
})
export class Prediccion1seccion1pnoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
