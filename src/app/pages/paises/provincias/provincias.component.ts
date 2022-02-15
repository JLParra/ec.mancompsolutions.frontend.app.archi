import { Component, OnInit } from '@angular/core';
import { Provincia } from '../interfaces/provincia.interface';
import { ciudadService } from '../services/ciudad.service';
import { PaisService } from '../services/pais.service';
import { ProvinciaService } from '../services/provincia.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent {


  termino: string = "";
  hayError: boolean = false;
  provincias: Provincia[] = [];
  totalProvincias: Number = 0;
  totalPais: Number = 0;
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
      next: (pais) => { console.log(pais); this.totalPais = pais },
      error: () => { this.totalPais = 0 },
      complete: () => { }
    });
    this.ciudadService.contarCiudades(1).subscribe({
      next: (ciudad) => { console.log(ciudad); this.totalCiudades = ciudad },
      error: () => { this.totalCiudades= 0 },
      complete: () => { }
    });
  }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.provinciaService.buscarProvincia(this.termino).subscribe({
      next: (provincia) => { console.log(provincia); this.provincias = provincia },
      error: () => { this.hayError = true; this.provincias = [] },
      complete: () => { }
    })
  }
}
