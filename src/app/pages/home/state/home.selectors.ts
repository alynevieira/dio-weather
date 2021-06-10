import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "./home.reducer";

// A string é a definição que está no modulo
export const selectHomeState = createFeatureSelector('home');

// eu passo a historia e o que eu quero selecionar dela
export const selectCurrentWeather = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.entity,
);

export const selectCurrentWeatherLoading = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.loading,
);

export const selectCurrentWeatherError = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.error,
);