import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { catchError, map, mergeMap } from 'rxjs/operators';
import { WeatherService } from "src/app/shared/services/weather.service";

import * as fromSearchBookmarkActions from './search-bookmark.actions';

@Injectable()
export class SearchBookmarkEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private weatherService: WeatherService) {}

  loadCurrentWeather$ = createEffect(() => this.actions$
  .pipe(
    ofType(fromSearchBookmarkActions.loadCurrentWeather),
    mergeMap(({ query }) => this.weatherService.getCity(query)),
    catchError((err, caught$) => {
      this.store.dispatch(fromSearchBookmarkActions.loadCurrentWeatherFailed());
      return caught$
    }),
    map((entity: any) => fromSearchBookmarkActions.loadCurrentWeatherSuccess({ entity }))
  ));

}