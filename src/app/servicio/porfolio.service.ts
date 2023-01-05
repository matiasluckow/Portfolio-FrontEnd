import { Injectable } from '@angular/core';

// Esto es para que se suscriba y que se reciba respuesta de forma asincronica

import { Observable } from 'rxjs';

// Esto es para poder hacer peticiones

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

// El primer http se llama alias

  constructor(private http:HttpClient) { }

  // Metodo observable que devuelve los datos

  getDatos(): Observable<any>{

  // Se llama al JSON con su path -ruta-, o bien, en su lugar se puede poner una URL para traer daros de un JSON online

  return this.http.get('./assets/data/data.json');

  }

}

