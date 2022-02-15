import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string="";
  debouncer: Subject<string> = new Subject();

  termino: string = "";


  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebunce.emit(valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
  sugerencias(){
    
    //TODO: CREAR SUGERENCIAS

  }

}
