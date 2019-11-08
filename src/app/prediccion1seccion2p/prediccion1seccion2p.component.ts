import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion1seccion2p',
  templateUrl: './prediccion1seccion2p.component.html',
  styleUrls: ['./prediccion1seccion2p.component.css']
})
export class Prediccion1seccion2pComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
