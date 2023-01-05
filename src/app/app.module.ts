import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { FormacacionacademicaComponent } from './componentes/formacacionacademica/formacacionacademica.component';
import { CursosycertificacionesComponent } from './componentes/cursosycertificaciones/cursosycertificaciones.component';
import { ExperiencialaboralComponent } from './componentes/experiencialaboral/experiencialaboral.component';
import { PorfolioService } from './servicio/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { IndexComponent } from './componentes/index/index.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ModalLogoutComponent } from './modales/modal-logout/modal-logout.component';
import { ModalFormacionAcademicaComponent } from './modales/modal-formacion-academica/modal-formacion-academica.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalAptitudesComponent } from './modales/modal-aptitudes/modal-aptitudes.component';
import { ModalCursosComponent } from './modales/modal-cursos/modal-cursos.component';
import { ModalAcercaDeMiComponent } from './modales/modal-acerca-de-mi/modal-acerca-de-mi.component';
import { ModalDatosComponent } from './modales/modal-datos/modal-datos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { interceptorProvider } from './servicio/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencialaboral/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencialaboral/edit-experiencia.component';
import { NewFormacionAcademicaComponent } from './componentes/formacacionacademica/new-formacion-academica.component';//
import { EditFormacionAcademicaComponent } from './componentes/formacacionacademica/edit-formacion-academica.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { EditCursoComponent } from './componentes/cursosycertificaciones/edit-curso.component';
import { NewCursoComponent } from './componentes/cursosycertificaciones/new-curso.component';
import { EditAcercaDeMiComponent } from './componentes/acercademi/edit-acerca-de-mi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    AcercademiComponent,
    FormacacionacademicaComponent,
    CursosycertificacionesComponent,
    ExperiencialaboralComponent,
    CarouselComponent,
    LoginComponent,
    LogoutComponent,
    Pagina404Component,
    IndexComponent,
    MenuComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    ModalFormacionAcademicaComponent,
    ModalExperienciaComponent,
    ModalAptitudesComponent,
    ModalCursosComponent,
    ModalAcercaDeMiComponent,
    ModalDatosComponent,
    ProyectosComponent,
    HeaderComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewFormacionAcademicaComponent,
    EditFormacionAcademicaComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditCursoComponent,
    NewCursoComponent,
    EditAcercaDeMiComponent,


],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    PorfolioService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
