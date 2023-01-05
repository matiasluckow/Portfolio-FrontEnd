import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicio/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {

  // form:FormGroup;
  // nombreEmpresa: string='';
  // puesto: string='';
  // esTrabajoActual: boolean=false;
  // fechaIncio: string='';
  // fechaFin: string='';
  // descripcion: string='';
  // imagen: string='';
  // url: string='';

  // constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService) { 
  //   // Grupo de controles para el formulario

  //   this.form= this.formBuilder.group({
  //     nombreEmpresa: ['',[Validators.required]],
  //     puesto: ['',[Validators.required]],
  //     esTrabajoActual: [''],
  //     fechaIncio: [''],
  //     fechaFin: [''],
  //     descripcion: [''],
  //     imagen: [''],
  //     url: [''],
  //   })

  // }

  // // Controlar Express #18

  // get Descripcion(){
  //   return this.form.get("descripcion");
  // }

   ngOnInit(): void {
  
   }

  // onCreate(): void{
  //   const experiencia = new Experiencia(this.nombreEmpresa, this.puesto, this.esTrabajoActual, this.fechaIncio, this.fechaFin,
  //     this.descripcion, this.imagen, this.url);
  //       this.sExperiencia.guardarExperiencia(experiencia).subscribe(data=>{alert("Experiencia Añadida")
  //       window.location.reload();
  // });
  // }

  // limpiar(): void{
  //   this.form.reset();
  // }

  
  // onEnviar(event:Event){
  //   event.preventDefault;
  //   if (this.form.valid){
  //     this.onCreate();
  //   }else{
  //     alert("Fallo en la carga, intente nuevamente");
  //     this.form.markAllAsTouched();
  //   }
  // }



}
