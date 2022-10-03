import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SearchBookmarkPage } from '../search-bookmark/container/search-bookmark/search-bookmark.page';
import { searchBookmarkReducer } from '../search-bookmark/state/search-bookmark.reducer';
import { SearchBookmarkEffects } from '../search-bookmark/state/search-bookmark.effects';
import { CurrentWeatherComponent } from '../search-bookmark/components/current-weather/current-weather.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    SearchBookmarkPage,
    CurrentWeatherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    StoreModule.forFeature('search-bookmark', searchBookmarkReducer),
    EffectsModule.forFeature([SearchBookmarkEffects]),
  ]
})
export class SearchBookmarkModule { }