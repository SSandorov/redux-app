import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

//* Como las importaciones pueden crecer mucho, podemos importar todas las funciones a la vez
import * as actions from './contador/contador.actions';

import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02-redux-app';

  contador!: number;

  constructor(
    //* injectamos el servicio store y le añadimos el tipo
    private store: Store<AppState>
    ) {
      //* podemos elegir si suscribirnos en el constructor o en el ngOnInit
      //* Esta es la manera global de acceder al state, donde tenemos que elegir el elemento
      //* con el que queremos trabajar
      // this.store.subscribe(state =>{
      //   this.contador = state.contador;
      // })
      /*
      * Si vemos las diferentes opciones dentro del store, podemos comprobar que tiene
      * varios métodos, entre ellos el select
      * El método select nos permite seleccionar un método en específico del store
      */
      this.store.select('contador').subscribe(contador =>this.contador = contador);
    }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  reducir() {
    this.store.dispatch(actions.reducir());
  }
}
