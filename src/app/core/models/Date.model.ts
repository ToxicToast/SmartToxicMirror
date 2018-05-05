export interface DateState {
  hours: number|string;
  minutes: number|string;
  seconds: number|string;
  dayName: string;
  day: number|string;
  month: number|string;
  year: number;
  show: boolean;
}

export interface RenderTimeState {
  hours: number|string;
  minutes: number|string;
  seconds: number|string;
  day: number|string;
  year: number;
}
