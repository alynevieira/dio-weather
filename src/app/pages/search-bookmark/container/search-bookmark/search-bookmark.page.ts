import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';
import * as fromSearchBookmarkActions from './../../state/search-bookmark.actions';
import * as fromSearchBookmarkSelectors from './../../state/search-bookmark.selectors';

@Component({
  selector: 'search-bookmark-home',
  templateUrl: './search-bookmark.page.html',
  styleUrls: ['./search-bookmark.page.scss']
})
export class SearchBookmarkPage implements OnInit, OnDestroy {
  private subscription$ = new Subject();

  cityWeather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchForm: FormControl;
  weather: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchForm = new FormControl('');

    this.loading$ = this.store.pipe(select(fromSearchBookmarkSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromSearchBookmarkSelectors.selectCurrentWeatherError));

    this.store.pipe(
      select(fromSearchBookmarkSelectors.selectCurrentWeather), 
      takeUntil(this.subscription$))
        .subscribe(cityWeather => this.cityWeather = cityWeather);
  }

  search() {
    const query = this.searchForm.value;

    // vou inserir na store através dessa ação "changeText" o texto que foi digitado
    this.store.dispatch(fromSearchBookmarkActions.loadCurrentWeather({ query }));
  }

  onToggleBookmark() {
    const bookmark = new Bookmark();
    
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;

    this.store.dispatch(fromSearchBookmarkActions.toggleBookmark({ entity: bookmark }));
  }

  ngOnDestroy() {
    this.subscription$.next();
    this.subscription$.unsubscribe();
  }

}