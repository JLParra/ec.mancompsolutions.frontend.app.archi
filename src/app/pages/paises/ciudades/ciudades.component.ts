import { Component, OnInit } from '@angular/core';
import { Ciudades } from '../interfaces/ciudades.interfaces';
import { ciudadService } from '../services/ciudad.service';
import { PaisService } from '../services/pais.service';
import { ProvinciaService } from '../services/provincia.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {

  termino: string = "";
  hayError: boolean = false;
  ciudades: Ciudades[] = [];

  totalProvincias: Number = 0;
  totalPaises: Number = 0;
  totalCiudades: Number = 0;
  constructor(private provinciaService: ProvinciaService, private paisService: PaisService, private ciudadService: ciudadService) {
    this.contar();
  }

  contar() {
    //1=> Activo
    this.provinciaService.contarProvincias(1).subscribe({
      next: (provincia) => { console.log(provincia); this.totalProvincias = provincia },
      error: () => { this.totalProvincias = 0 },
      complete: () => { }
    });
    this.paisService.contarPais(1).subscribe({
      next: (pais) => { console.log(pais); this.totalPaises = pais },
      error: () => { this.totalPaises = 0 },
      complete: () => { }
    });
    this.ciudadService.contarCiudades(1).subscribe({
      next: (ciudad) => { console.log(ciudad); this.totalCiudades = ciudad },
      error: () => { this.totalCiudades = 0 },
      complete: () => { }
    });
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.ciudadService.buscarCiudades(this.termino).subscribe({
      next: (ciudad) => { console.log(ciudad); this.ciudades = ciudad },
      error: () => { this.hayError = true; this.ciudades = [] },
      complete: () => { }
    })
  }
}
