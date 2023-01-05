import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/servicio/formacion-academica.service';
import { ImageService } from 'src/app/servicio/image.service';

@Component({
  selector: 'app-edit-formacion-academica',
  templateUrl: './edit-formacion-academica.component.html',
  styleUrls: ['./edit-formacion-academica.component.css']
})
export class EditFormacionAcademicaComponent implements OnInit {
  formacionAcademica: FormacionAcademica = null!;
  
   constructor(
     private formacionAcademicaS: FormacionAcademicaService,
     private activatedRouter : ActivatedRoute,
     private router: Router,
     public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.formacionAcademicaS.detail(id).subscribe(
        data =>{
        this.formacionAcademica = data;
    }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.formacionAcademica.imagen = this.imageService.url
    this.formacionAcademicaS.update(id, this.formacionAcademica).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  uploadImagen($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "formacionAcademica_" + id;
    this.imageService.uploadImage($event, name)
  }
}
