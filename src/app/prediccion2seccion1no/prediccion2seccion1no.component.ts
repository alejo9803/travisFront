import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion2seccion1no',
  templateUrl: './prediccion2seccion1no.component.html',
  styleUrls: ['./prediccion2seccion1no.component.css']
})
export class Prediccion2seccion1noComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
