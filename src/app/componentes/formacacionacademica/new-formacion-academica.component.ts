import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/servicio/formacion-academica.service';

@Component({
  selector: 'app-new-formacion-academica',
  templateUrl: './new-formacion-academica.component.html',
  styleUrls: ['./new-formacion-academica.component.css']
})
export class NewFormacionAcademicaComponent implements OnInit {
  institucion: string = '';
  titulo: string= '';
  fechaInicio: string= '';
  fechaFin: string= '';
  imagen: string='';

  constructor(private estudioS: FormacionAcademicaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new FormacionAcademica(this.institucion, this.titulo, this.fechaInicio, this.fechaFin, this.imagen);
    this.estudioS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
