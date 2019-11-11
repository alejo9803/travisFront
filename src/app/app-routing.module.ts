import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Seccion1pregunta1Component} from './seccion1pregunta1/seccion1pregunta1.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PsicologoComponent } from './psicologo/psicologo.component';


const routes: Routes = [
  {
  
        path: 'psicologo',
        component: PsicologoComponent,
        children: [
          {
           
            component: UsuariosComponent,
            path: 'usuarios',
          },
        ]
      
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
