import { Action, createReducer } from "@ngrx/store";

export interface HomeState {
  text: string
 }

export const homeInitialState: HomeState = {
  text: 'Praia Grande',
}

const reducer = createReducer(
  homeInitialState,
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}