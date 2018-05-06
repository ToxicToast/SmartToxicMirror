import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenWeatherMapService } from './services/open-weather-map.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    OpenWeatherMapService
  ]
})
export class CoreModule { }
