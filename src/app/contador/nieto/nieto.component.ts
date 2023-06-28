import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {
  @Input() contador!: number;
  @Output() resetContador = new EventEmitter<number>();

  reset() {
    this.contador = 0;
    this.resetContador.emit(this.contador);
  }
}
