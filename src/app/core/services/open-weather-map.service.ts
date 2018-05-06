import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  private config = {}; // ToDo - Need Interface

  constructor(
    private http: HttpClient
  ) {
    const apiKey = environment.apiKeys.weather;
    this.config = {
      units: 'metric',
      lang: 'de',
      apiKey,
    };
  }

  getWeatherForCity(city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const fullurl = url + this.setParams(city, this.config.units, this.config.lang, this.config.apiKey);
    return this.http.get(fullurl);
  }

  private setParams(location, units, lang, appid) {
    let params = '?';
    params += 'q=' + location;
    params += '&units=' + units;
    params += '&lang=' + lang;
    params += '&APPID=' + appid;
    return params;
  }

}
