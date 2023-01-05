import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicio/porfolio.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;

  // Crear variable de instancia para almacenar los datos con los que trata el Servicio

  infoporfolio: any;
  redes: any = [];

  // Inyectar el Servicio para tener acceso en la clase a los Metodos

  constructor(private porfolioservice: PorfolioService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
   
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }

    // Esto es almacenar en la variable de instancia los datos recuperados por el Servicio 

    this.porfolioservice.getDatos().subscribe(data => {
      console.log(data);
      this.infoporfolio = data;
      this.redes = data.redes;
    })
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
