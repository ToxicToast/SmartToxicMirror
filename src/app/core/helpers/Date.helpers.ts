import { RenderTimeState } from '../models/Date.model';

export enum monthNames {
  JANUARY = 'Januar',
  FEBRUARY = 'Februar',
  MARCH = 'März',
  APRIL = 'April',
  MAY = 'Mai',
  JUNE = 'Juni',
  JULY = 'Juli',
  AUGUST = 'August',
  SEPTEMBER = 'September',
  OCTOBER = 'Oktober',
  NOVEMBER = 'November',
  DECEMBER = 'Dezember'
}

export enum dayNames {
  SUNDAY = 'Sonntag',
  MONDAY = 'Montag',
  TUESDAY = 'Dienstag',
  WEDNESDAY = 'Mittwoch',
  THURSDAY = 'Donnerstag',
  FRIDAY = 'Freitag',
  SATURDAY = 'Samstag'
}

export const currentMonth = () => {
  const date = new Date();
  const monthToday = date.getMonth();
  const months = [];
  months.push(monthNames.JANUARY);
  months.push(monthNames.FEBRUARY);
  months.push(monthNames.MARCH);
  months.push(monthNames.APRIL);
  months.push(monthNames.MAY);
  months.push(monthNames.JUNE);
  months.push(monthNames.JULY);
  months.push(monthNames.AUGUST);
  months.push(monthNames.SEPTEMBER);
  months.push(monthNames.OCTOBER);
  months.push(monthNames.NOVEMBER);
  months.push(monthNames.DECEMBER);
  return months[monthToday];
};

export const currentDay = () => {
  const date = new Date();
  const dayToday = date.getDay();
  const days = [];
  days.push(dayNames.MONDAY);
  days.push(dayNames.TUESDAY);
  days.push(dayNames.WEDNESDAY);
  days.push(dayNames.THURSDAY);
  days.push(dayNames.FRIDAY);
  days.push(dayNames.SATURDAY);
  days.push(dayNames.SUNDAY);
  return days[dayToday - 1];
};

export const renderTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDate();
  const year = date.getFullYear();
  //
  let secondString = '';
  let minuteString = '';
  let hourString = '';
  let dayString = '';
  //
  if (seconds < 10) {
    secondString = `0${seconds}`;
  } else {
    secondString = `${seconds}`;
  }
  if (minutes < 10) {
    minuteString = `0${minutes}`;
  } else {
    minuteString = `${minutes}`;
  }
  if (hours < 10) {
    hourString = `0${hours}`;
  } else {
    hourString = `${hours}`;
  }
  if (day < 10) {
    dayString = `0${day}`;
  } else {
    dayString = `${day}`;
  }
  //
  const payload: RenderTimeState = {
    hours: hourString,
    minutes: minuteString,
    seconds: secondString,
    day: dayString,
    year
  };
  return payload;
};
