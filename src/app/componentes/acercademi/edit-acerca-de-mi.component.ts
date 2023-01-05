import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/servicio/image.service';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-edit-acerca-de-mi',
  templateUrl: './edit-acerca-de-mi.component.html',
  styleUrls: ['./edit-acerca-de-mi.component.css']
})
export class EditAcercaDeMiComponent implements OnInit {

  persona: Persona = null!;
  
  constructor(
     private personaS: PersonaService,
     private activatedRouter : ActivatedRoute,
     private router: Router,
     public imageService: ImageService) { }
  
  ngOnInit(): void {
    //const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(1).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    //const id = this.activatedRouter.snapshot.params['id'];
    this.persona.foto = this.imageService.url
    this.personaS.update(1, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImagen($event:any){
     const id = this.activatedRouter.snapshot.params['id'];
     const name = "perfil_" + id;
     this.imageService.uploadImage($event, name)
  }

}
