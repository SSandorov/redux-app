import { createAction, props } from "@ngrx/store";

                                      // * entre corchetes viene el nombre de la acción
export const incrementar = createAction('[Contador] Incrementar');
export const reducir = createAction('[Contador] Reducir');
export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{numero: number}>());
export const dividir = createAction(
  '[Contador] Dividir',
  props<{numero: number}>());
export const reset = createAction(
  '[Contador] Reset');
  // props<{contador: number, inicial: number}>());
