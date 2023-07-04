import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

//* Como las importaciones pueden crecer mucho, podemos importar todas las funciones a la vez
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02-redux-app';

  contador!: number;

  constructor(
    // * injectamos el servicio store y le añadimos el tipo
    private store: Store<AppState>
    ) {
      // * podemos elegir si suscribirnos en el constructor o en el ngOnInit
      this.store.subscribe(state =>{
        this.contador = state.contador;
      })
    }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  reducir() {
    this.store.dispatch(actions.reducir());
  }
}
