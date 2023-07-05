import { createReducer, on } from "@ngrx/store";
import { incrementar, reducir } from "./contador.actions";

// * Implementamos a mano el reducer
// export function contadorReducer(state: number = 10, action: Action) {
//   switch(action.type) {

//     case incrementar.type:
//       return state + 1;

//     case reducir.type:
//       return state - 1;

//     default:
//       return state;
//   }
// }

/*
  * El uso del createReducer() es más eficiente al no emplear switches para manejar los
  * distintos casos
*/
export const initialState = 10;

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(reducir, (state) => state - 1),
);
