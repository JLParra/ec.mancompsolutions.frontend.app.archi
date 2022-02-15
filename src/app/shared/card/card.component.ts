import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() cantidad: Number = 0;
  @Input() total: Number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
