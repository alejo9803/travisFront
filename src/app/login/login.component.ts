import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';
import { Paciente } from '../service/Paciente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private AdminService : AdminService) {

   }

  ngOnInit() {
  }

  pacientes : Paciente;


login(form: NgForm){
  var url = this.router
  this.AdminService.getPaciente(form.value.password).then(function(data){
    if(form.value.identificacion=== data.nombre){
      localStorage.setItem( 'email', form.value.password);
      url.navigate(['/introduccion'])   
    }
    })
    
  
}

}
