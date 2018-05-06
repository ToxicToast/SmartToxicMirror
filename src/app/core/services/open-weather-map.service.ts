import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  private config = {};

  constructor() {
    const apiKey = environment.apiKeys.weather;
    this.config = {
      units: '',
      lang: '',
      apiKey,
    };
  }

  getWeatherForCity(city) {
    console.error(this.config, city);
  }

}
