import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { DateComponent } from './components/date/date.component';
import { DateContainerComponent } from './containers/date-container/date-container.component';
import { WeatherContainerComponent } from './containers/weather-container/weather-container.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ],
  declarations: [
    DashboardContainerComponent,
    CalendarComponent,
    WeatherComponent,
    ForecastComponent,
    DateComponent,
    DateContainerComponent,
    WeatherContainerComponent
  ]
})
export class DashboardModule { }
