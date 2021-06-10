import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';

import { HomePage } from './home.page';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('home', homeReducer),
  ]
})
export class HomeModule { }
