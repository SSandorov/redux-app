import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02-redux-app';

  contador: number;

  constructor() {
    this.contador = 10;
  }

  incrementar() {
    this.contador += 1;
  }

  reducir() {
    this.contador -= 1;
  }
}
