import { Action, createReducer, on } from "@ngrx/store";

import * as fromSearchBookmarkActions from './search-bookmark.actions';

export interface SearchBookmarkState {
  entity: any;
  loading: boolean;
  error: boolean;
}

export const searchBookmarkInitialState: SearchBookmarkState = {
  entity: undefined,
  loading: false,
  error: false
}

// Quando a action for disparada, ela recebe o estado e as props, e é retornado um novo estado
const reducer = createReducer(
  searchBookmarkInitialState,
  on(fromSearchBookmarkActions.loadCurrentWeather, state => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(fromSearchBookmarkActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false
  })),
  on(fromSearchBookmarkActions.loadCurrentWeatherFailed, state => ({
    ...state,
    loading: false,
    error: true
  }))
);

export function searchBookmarkReducer(state: SearchBookmarkState | undefined, action: Action): SearchBookmarkState {
  return reducer(state, action);
}