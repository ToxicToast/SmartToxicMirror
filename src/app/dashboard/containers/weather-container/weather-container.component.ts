import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../../core/services/open-weather-map.service';

@Component({
  selector: 'mirror-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {

  weatherState: any; // TODO - Add Interface
  private city = 'Frankfurt am Main';

  constructor(
    private service: OpenWeatherMapService
  ) { }

  ngOnInit() {
    this.weatherState = this.service.getWeatherForCity(this.city);
  }

}
