export const weatherIcon = (icon) => {
  const weather = [];
  weather['01d'] = 'wi-day-sunny';
  weather['02d'] = 'wi-day-cloudy';
  weather['03d'] = 'wi-cloudy';
  weather['04d'] = 'wi-cloudy-windy';
  weather['09d'] = 'wi-showers';
  weather['10d'] = 'wi-rain';
  weather['11d'] = 'wi-thunderstorm';
  weather['13d'] = 'wi-snow';
  weather['50d'] = 'wi-fog';
  weather['01n'] = 'wi-night-clear';
  weather['02n'] = 'wi-night-cloudy';
  weather['03n'] = 'wi-night-cloudy';
  weather['04n'] = 'wi-night-cloudy';
  weather['09n'] = 'wi-night-showers';
  weather['10n'] = 'wi-night-rain';
  weather['11n'] = 'wi-night-thunderstorm';
  weather['13n'] = 'wi-night-snow';
  weather['50n'] = 'wi-night-alt-cloudy-windy';
  return weather[icon];
};

export const getSunTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  //
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  //
  let hourString = '';
  let minuteString = '';
  let secondsString = '';
  //
  if (seconds < 10) {
    secondsString = `0${seconds}`;
  } else {
    secondsString = `${seconds}`;
  }
  if (minute < 10) {
    minuteString = `0${minute}`;
  } else {
    minuteString = `${minute}`;
  }
  if (hour < 10) {
    hourString = `0${hour}`;
  } else {
    hourString = `${hour}`;
  }
  //
  return {
    hour,
    minute,
    seconds,
    hourString,
    minuteString,
    secondsString
   };
};

export const getWindDirection = (deg) => {
  const windDir = 360;
  const directions = [
    'N', 'NNE', 'NE', 'ENE', 'E',
    'ESE', 'SE', 'SSE', 'S', 'SSW',
    'SW', 'WSW', 'W', 'WNW', 'NW',
    'NNW', 'N'
  ];
  const degrees = deg % windDir;
  const Index = Math.round(degrees / 22.5) + 1;
  return directions[Index - 1];
};

export const checkSunTime = (sunrise, sunset) => {
  const sunriseTime = getSunTime(sunrise);
  const sunsetTime = getSunTime(sunset);
  const sunnow = new Date().getHours();
  //
  let payload = {
    'sunIcon': null,
    'sunTime': null
  };
  if (sunriseTime.hour <= sunnow) {
    payload = {
      'sunIcon': 'wi-sunset',
      'sunTime': sunsetTime
    };
  } else if (sunriseTime.hour >= sunnow) {
    payload = {
      'sunIcon': 'wi-sunrise',
      'sunTime': sunriseTime
    };
  }
  //
  if (sunsetTime.hour <= sunnow) {
    payload = {
      'sunIcon': 'wi-sunset',
      'sunTime': sunsetTime
    };
  } else if (sunsetTime.hour >= sunnow) {
    payload = {
      'sunIcon': 'wi-sunrise',
      'sunTime': sunriseTime
    };
  }
  return payload;
};
