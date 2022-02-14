import { Component, OnInit } from '@angular/core';
import { Pais } from './interfaces/pais.interface';
import { PaisService } from './services/pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Pais[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino=termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => { console.log(paises); this.paises = paises },
      error: () => { this.hayError = true; this.paises = [] },
      complete: () => { }
    })
  }

}
