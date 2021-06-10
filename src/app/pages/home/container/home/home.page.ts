import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityWeather } from 'src/app/shared/models/weather.model';
import * as fromHomeActions from './../../state/home.actions';
import * as fromHomeSelectors from './../../state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  cityWeather$: Observable<CityWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchForm: FormControl;
  weather: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchForm = new FormControl('');

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));
  }

  search() {
    const query = this.searchForm.value;

    // vou inserir na store através dessa ação "changeText" o texto que foi digitado
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
  }

}
