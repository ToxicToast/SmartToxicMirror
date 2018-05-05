import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mirror-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  localState: any; // TODO Refactor

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

  ngOnInit() {
  }

}
