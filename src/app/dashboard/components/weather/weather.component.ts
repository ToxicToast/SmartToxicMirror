import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
import { getWindDirection, checkSunTime } from '../../../core/helpers/Weather.helper';

@Component({
  selector: 'mirror-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() apiState: any; // TODO Refactor
  localState: any;

  constructor() {
    this.localState = {
      sunIcon: undefined,
      sunTime: undefined,
      wind: undefined,
      windDirection: undefined,
      temp: undefined,
      city: undefined,
      iconClass: undefined
    };
  }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.apiState === null) {
      this.localState = {
        sunIcon: '',
        sunTime: '00:00',
        wind: 0,
        windDirection: 'NWSE',
        temp: 0,
        city: 'Frankfurt am Main',
        iconClass: 'wi-night-clear'
      };
    }
  }

  ngAfterViewChecked() {
    console.error(this.apiState);
    const sunItems = checkSunTime(this.apiState.sys.sunrise, this.apiState.sys.sunset);
    const windDirection = getWindDirection(this.apiState.wind.deg);
    //
    const { sunTime, sunIcon } = sunItems;
    //
    this.localState.city = this.apiState.name;
    this.localState.wind = this.apiState.wind.speed;
    this.localState.windDirection = windDirection;
    this.localState.temp = this.apiState.main.temp;
    this.localState.sunIcon = sunIcon;
    this.localState.sunTime = `${sunTime.hourString}:${sunTime.minuteString}`;
  }

}
