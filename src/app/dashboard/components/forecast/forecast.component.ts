import { Component, OnInit } from '@angular/core';

import { dayNames } from '../../../core/helpers/Date.helpers';

@Component({
  selector: 'mirror-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  localState: any; // TODO Refactor

  constructor() { }

  ngOnInit() {
  }

}
