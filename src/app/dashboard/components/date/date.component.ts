import { Component, OnInit } from '@angular/core';
import { DateState, RenderTimeState } from '../../../core/models/Date.model';
import { monthNames, dayNames, currentMonth, currentDay, renderTime } from '../../../core/helpers/Date.helpers';

@Component({
  selector: 'mirror-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  localState: DateState;

  constructor() {
    this.localState = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      day: 0,
      dayName: dayNames.SUNDAY,
      month: monthNames.JANUARY,
      year: 1970,
      show: false
    };
  }

  ngOnInit() {
    setInterval(() => {
      this.tick();
    }, 1000);
    this.localState.show = true;
  }

  private tick() {
    const renderedTime: RenderTimeState = renderTime();
    const { hours, minutes, seconds, day, year } = renderedTime;
    //
    this.localState.hours = hours;
    this.localState.minutes = minutes;
    this.localState.seconds = seconds;
    this.localState.day = day;
    this.localState.year = year;
    this.localState.month = currentMonth();
    this.localState.dayName = currentDay();
  }

}
