import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Seccion1pregunta1Component} from './seccion1pregunta1/seccion1pregunta1.component';


const routes: Routes = [
  {
    path:'seccion1pregunta1',
    children:[
      {
        path: '',
        component: Seccion1pregunta1Component,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
