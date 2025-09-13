import { createAction, props } from "@ngrx/store"

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const addCustomCounter = createAction('[Counter Component] Add Custom Counter',
    props<{addValue:number}>());
export const removeCustomCounter = createAction('[Counter Component] Remove Custom Counter',
    props<{removeValue:number}>());