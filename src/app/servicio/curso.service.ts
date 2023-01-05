import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Curso } from '../model/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  URL:string = environment.apiURL + 'curso/'

//URL= 'http://localhost:8080/curso/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Curso>{
    return this.httpClient.get<Curso>(this.URL + `detail/${id}`);
  }

  public save(educacion: Curso): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Curso): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
