import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  providers: [DatePipe]
})
export class CurrentWeatherComponent {
  @Input() cityWeather: CityWeather;
  @Output() toggleBookmark = new EventEmitter();
  dateNow = new Date();

  onToggleBookmark() {
    this.toggleBookmark.emit();
  }
}
