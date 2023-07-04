import { Action } from "@ngrx/store";
import { incrementar, reducir } from "./contador.actions";

// * Implementamos a mano el reducer
export function contadorReducer(state: number = 10, action: Action) {
  switch(action.type) {

    case incrementar.type:
      return state + 1;

    case reducir.type:
      return state - 1;

    default:
      return state;
  }
}
