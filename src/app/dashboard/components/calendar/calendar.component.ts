import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mirror-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  localState: any;

  constructor() { }

  ngOnInit() {
  }

}
