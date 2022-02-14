import { Component, EventEmitter, Output } from '@angular/core';
;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
   termino: string = "";
  constructor() { }

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
