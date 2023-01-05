import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { EditAcercaDeMiComponent } from './componentes/acercademi/edit-acerca-de-mi.component';
import { EditCursoComponent } from './componentes/cursosycertificaciones/edit-curso.component';
import { NewCursoComponent } from './componentes/cursosycertificaciones/new-curso.component';
import { EditExperienciaComponent } from './componentes/experiencialaboral/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencialaboral/new-experiencia.component';
import { EditFormacionAcademicaComponent } from './componentes/formacacionacademica/edit-formacion-academica.component';
import { NewFormacionAcademicaComponent } from './componentes/formacacionacademica/new-formacion-academica.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'editper', component: EditAcercaDeMiComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'newedu', component: NewFormacionAcademicaComponent},
  {path: 'editedu/:id', component: EditFormacionAcademicaComponent},
  {path: 'newcur', component: NewCursoComponent},
  {path: 'editcur/:id', component:EditCursoComponent},
  {path: 'newexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'newpro', component: NewProyectoComponent},
  {path: 'editpro/:id', component: NewProyectoComponent},
  {path: '**', component: Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
