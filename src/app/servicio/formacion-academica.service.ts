import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FormacionAcademica } from '../model/formacion-academica';

@Injectable({
  providedIn: 'root'
})
export class FormacionAcademicaService {


  URL:string = environment.apiURL + 'estudio/'

  // URL= 'http://localhost:8080/estudio/'

  constructor(private httpClient:HttpClient) { }

  // public verEstudios(): Observable<FormacionAcademica[]>{
  //   return this.httpClient.get<FormacionAcademica[]>(this.url + 'lista');
  // }

  // public verEstudio(id: number): Observable<any>{
  //   return this.httpClient.get<FormacionAcademica>(this.url + `ver/${id}`);
  // }

  // public agregarEstudio(formacion: FormacionAcademica): Observable<any>{
  //   return this.httpClient.post<any>(this.url + 'crear', formacion);
  // }
  
  // public actualizarEstudio(formacion: FormacionAcademica): Observable<any>{
  //   return this.httpClient.put<any>(this.url + 'editar', formacion);
  // } 

  // public eliminarEstudio(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  // }
  public lista(): Observable<FormacionAcademica[]>{
    return this.httpClient.get<FormacionAcademica[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<FormacionAcademica>{
    return this.httpClient.get<FormacionAcademica>(this.URL + `detail/${id}`);
  }

  public save(educacion: FormacionAcademica): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: FormacionAcademica): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
