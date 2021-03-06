import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudades } from '../interfaces/ciudades.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ciudadService {
  private apiUrl: string = "http://localhost:9091/api";

  constructor(private http: HttpClient) { }

  buscarCiudades(termino: string): Observable<Ciudades[]> {
    const url = `${this.apiUrl}/mundo/ciudades/buscarpornombre/${termino}`
    return this.http.get<Ciudades[]>(url);
  }

  contarCiudades(termino: number): Observable<Number> {
    const url = `${this.apiUrl}/mundo/ciudades/count/${termino}`
    return this.http.get<Number>(url);
  }
}
