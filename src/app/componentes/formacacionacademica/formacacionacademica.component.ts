import { Component, OnInit } from '@angular/core';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/servicio/formacion-academica.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-formacacionacademica',
  templateUrl: './formacacionacademica.component.html',
  styleUrls: ['./formacacionacademica.component.css']
})
export class FormacacionacademicaComponent implements OnInit {

  Estudios: FormacionAcademica[] = [];

  constructor(private estudioS: FormacionAcademicaService, private tokenService: TokenService) { }
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
    this.estudioS.lista().subscribe(
      data =>{
        this.Estudios = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.estudioS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
