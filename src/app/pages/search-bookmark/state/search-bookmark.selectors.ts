import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchBookmarkState } from "./search-bookmark.reducer";

// A string é a definição que está no modulo
export const selectSearchBookmarkState = createFeatureSelector('SearchBookmark');

// eu passo a historia e o que eu quero selecionar dela
export const selectCurrentWeather = createSelector(
  selectSearchBookmarkState,
  (SearchBookmarkState: SearchBookmarkState) => SearchBookmarkState.entity,
);

export const selectCurrentWeatherLoading = createSelector(
  selectSearchBookmarkState,
  (SearchBookmarkState: SearchBookmarkState) => SearchBookmarkState.loading,
);

export const selectCurrentWeatherError = createSelector(
  selectSearchBookmarkState,
  (SearchBookmarkState: SearchBookmarkState) => SearchBookmarkState.error,
);