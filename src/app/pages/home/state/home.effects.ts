import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { catchError, map, mergeMap } from 'rxjs/operators';
import { WeatherService } from "src/app/shared/services/weather.service";

import * as fromHomeActions from './home.actions';

@Injectable()
export class HomeEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private weatherService: WeatherService) {}

  loadCurrentWeather$ = createEffect(() => this.actions$
  .pipe(
    ofType(fromHomeActions.loadCurrentWeather),
    mergeMap(({ query }) => this.weatherService.getCity(query)),
    catchError((err, caught$) => {
      this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed());
      return caught$
    }),
    map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess({ entity }))
  ));

}