import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from '../interfaces/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private apiUrl: string = "http://localhost:9091/api";

  constructor(private http: HttpClient) { }

  buscarProvincia(termino: string): Observable<Provincia[]> {
    const url = `${this.apiUrl}/mundo/provincias/buscarpornombre/${termino}`
    return this.http.get<Provincia[]>(url);
  }

  contarProvincias(termino: number): Observable<Number> {
    const url = `${this.apiUrl}/mundo/provincias/count/${termino}`
    return this.http.get<Number>(url);
  }
}
