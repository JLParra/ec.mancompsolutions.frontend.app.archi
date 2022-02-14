import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string="http://localhost:9091/api";

  constructor(private http:HttpClient) { }

  buscarPais(termino: string):Observable<Pais[]>{
    const url=`${this.apiUrl}/paises/buscarpornombre/${termino}`
   return this.http.get<Pais[]>(url);
  }
}
