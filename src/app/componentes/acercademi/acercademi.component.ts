import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';


@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  persona: Persona = null!;

  constructor(private sPersona: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarPersona(){
    this.sPersona.detail(1).subscribe(data =>{
      this.persona = data;
    })
  }

  delete(id?: number){
    if( id != undefined){
      this.sPersona.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
