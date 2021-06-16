import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailedWeatherComponent implements OnInit {
  @Input() weather: Weather;
  temp: number;

  ngOnInit() {
    if (this.weather) this.temp = Math.round(this.weather.temp);
  }

  get icon(): string {
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;
  }
}
