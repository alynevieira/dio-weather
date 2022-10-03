import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';
import * as fromHomeActions from './../../state/home.actions';
import * as fromHomeSelectors from './../../state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  private subscription$ = new Subject();

  cityWeather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchForm: FormControl;
  weather: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchForm = new FormControl('');

    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

    this.store.pipe(
      select(fromHomeSelectors.selectCurrentWeather), 
      takeUntil(this.subscription$))
        .subscribe(cityWeather => this.cityWeather = cityWeather);
  }

  ngOnDestroy() {
    this.subscription$.next();
    this.subscription$.unsubscribe();
  }

}
