import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  URL:string = environment.apiURL + 'red/'
  // url= 'http://localhost:8080/red/'

  constructor(private httpClient:HttpClient) { }

  public verRedes(): Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.URL + 'lista');
  }

  public verRed(id: number): Observable<any>{
    return this.httpClient.get<Red>(this.URL + `ver/${id}`);
  }

  public agregarRed(re: Red): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', re);
  }
  
  public actualizarRed(re: Red): Observable<any>{
    return this.httpClient.put<any>(this.URL + 'editar', re);
  } 

  public eliminarRed(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  } 
}
