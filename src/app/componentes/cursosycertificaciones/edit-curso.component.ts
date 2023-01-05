import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicio/curso.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso: Curso = null!;
  
   constructor(
     private cursoS: CursoService,
     private activatedRouter : ActivatedRoute,
     private router: Router
   ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.cursoS.detail(id).subscribe(
        data =>{
        this.curso = data;
    }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

   onUpdate(): void{
     const id = this.activatedRouter.snapshot.params['id'];
     this.cursoS.update(id, this.curso).subscribe(
       data => {
         this.router.navigate(['']);
       }, err => {
         alert("Error al modificar el curso");
         this.router.navigate(['']);
       }
     )
  }
}