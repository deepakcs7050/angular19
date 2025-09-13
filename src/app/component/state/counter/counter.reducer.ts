import { createReducer, on } from "@ngrx/store";
import {
  addCustomCounter,
  decrement,
  increment,
  removeCustomCounter,
  reset,
} from "./counter.action";

const intitalState = 0;

export const counterReducer = createReducer(
  intitalState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => intitalState),
  on(addCustomCounter, (state, action) => state + action.addValue),
  on(removeCustomCounter, (state, action) => state - action.removeValue)
);
