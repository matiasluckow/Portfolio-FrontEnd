import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicio/curso.service';
import { PorfolioService } from 'src/app/servicio/porfolio.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-cursosycertificaciones',
  templateUrl: './cursosycertificaciones.component.html',
  styleUrls: ['./cursosycertificaciones.component.css']
})
export class CursosycertificacionesComponent implements OnInit {

  Cursos: Curso[] = [];

  constructor(private cursoS: CursoService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.cursoS.lista().subscribe(
      data =>{
        this.Cursos = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.cursoS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
