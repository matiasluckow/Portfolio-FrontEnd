import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicio/curso.service';

@Component({
  selector: 'app-new-curso',
  templateUrl: './new-curso.component.html',
  styleUrls: ['./new-curso.component.css']
})
export class NewCursoComponent implements OnInit {

  nombreCurso: string = '';
  titulo: string= '';
  fechaInicio: string= '';
  fechaFin: string= '';

  constructor(private cursoS: CursoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const curso = new Curso(this.nombreCurso, this.titulo, this.fechaInicio, this.fechaFin);
    this.cursoS.save(curso).subscribe(
      data =>{
        alert("Curso añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
