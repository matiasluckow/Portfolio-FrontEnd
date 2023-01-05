import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Suscribirse a los datos y que reciba respuesta asincronica
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
// Hacer peticiones y CRUD

import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  
//   constructor(private httpClient:HttpClient) {}


//   public verExperiencias(): Observable<Experiencia[]>{
//     return this.httpClient.get<Experiencia[]>(this.url + 'lista');
//   }

//   public verExperiencia(id: number): Observable<any>{
//     return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
//   }

//   public guardarExperiencia(experiencia: Experiencia):Observable<any>{
//     return this.httpClient.post<any>(this.url + 'guardar', experiencia);
//   }

//   public agregarExperiencia(experiencia: Experiencia): Observable<any>{
//     return this.httpClient.post<any>(this.url + 'crear', experiencia);
//   }
  
//   public actualizarExperiencia(experiencia: Experiencia): Observable<any>{
//     return this.httpClient.put<any>(this.url + 'editar', experiencia);
//   } 

//   public eliminarExperiencia(id: number): Observable<any>{
//     return this.httpClient.delete<any>(this.url + `borrar/${id}`);
//   } 

    URL:string = environment.apiURL + 'experiencia/'

    //url= 'http://localhost:8080/experiencia/'
    

    constructor(private httpClient: HttpClient){}

    public lista(): Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Experiencia>{
      return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);
    } 

    public save(experiencia: Experiencia): Observable<any>{
      return this.httpClient.post<any>(this.URL + 'create', experiencia);
    }

    public update(id: number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
    }

    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }

}
