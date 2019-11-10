import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion4seccion1pno',
  templateUrl: './prediccion4seccion1pno.component.html',
  styleUrls: ['./prediccion4seccion1pno.component.css']
})
export class Prediccion4seccion1pnoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
