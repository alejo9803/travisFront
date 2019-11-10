import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit {
  constructor(private router: Router) { }
 routes: Object[]=[
{
  title:'Usuarios',
  route:'/usuarios',
  icon :'dashboard',
 },

 ]

  ngOnInit() {
  }

}
