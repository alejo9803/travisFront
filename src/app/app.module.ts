import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes} from '@angular/router';
import { Seccion1pregunta1Component } from './seccion1pregunta1/seccion1pregunta1.component';
import { Seccion1pregunta2Component } from './seccion1pregunta2/seccion1pregunta2.component';
import { Seccion1pregunta3Component } from './seccion1pregunta3/seccion1pregunta3.component';
import { Prediccion1seccion1Component } from './prediccion1seccion1/prediccion1seccion1.component';
import { Seccion2pregunta1Component } from './seccion2pregunta1/seccion2pregunta1.component';
import { Prediccion1seccion2Component } from './prediccion1seccion2/prediccion1seccion2.component';
import { Seccion2pregunta2Component } from './seccion2pregunta2/seccion2pregunta2.component';
import { Seccion2pregunta3Component } from './seccion2pregunta3/seccion2pregunta3.component';
import { Prediccion2seccion2Component } from './prediccion2seccion2/prediccion2seccion2.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { HttpModule } from '@angular/http';
import { AdminService } from './service/AdminService';






const routes: Routes=  [ 
{path:'',component: LoginComponent, canActivate:[NoLoginGuard]},   
{path:'login',component: LoginComponent, canActivate:[NoLoginGuard]},
{path:'seccion1pregunta1',component:Seccion1pregunta1Component, canActivate: [LoginGuard]},
{path:'introduccion',component:IntroduccionComponent, canActivate: [LoginGuard]},
{path:'seccion1pregunta2',component:Seccion1pregunta2Component, canActivate: [LoginGuard]},
{path:'seccion1pregunta3',component:Seccion1pregunta3Component, canActivate: [LoginGuard]},
{path:'prediccion1seccion1',component:Prediccion1seccion1Component, canActivate: [LoginGuard]},
{path:'seccion2pregunta1',component:Seccion2pregunta1Component, canActivate: [LoginGuard]},
{path:'prediccion1seccion2',component:Prediccion1seccion2Component, canActivate: [LoginGuard]},
{path:'seccion2pregunta2',component:Seccion2pregunta2Component, canActivate: [LoginGuard]},
{path:'seccion2pregunta3',component:Seccion2pregunta3Component, canActivate: [LoginGuard]},
{path:'prediccion2seccion2',component:Prediccion2seccion2Component, canActivate: [LoginGuard]},


];

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionComponent,
    FooterComponent,
    HeaderComponent,
    Seccion1pregunta1Component,
    Seccion1pregunta2Component,
    Seccion1pregunta3Component,
    Prediccion1seccion1Component,
    Seccion2pregunta1Component,
    Prediccion1seccion2Component,
    Seccion2pregunta2Component,
    Seccion2pregunta3Component,
    Prediccion2seccion2Component,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
  ],
  providers: [LoginGuard,NoLoginGuard, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
