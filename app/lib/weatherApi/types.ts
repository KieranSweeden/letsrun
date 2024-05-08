export type WeatherApiForecastResponse = {
  location: WeatherApiLocation,
  current: WeatherApiCurrent,
  forecast: {
    forecastday: WeatherApiForecastDay[]
  }
}

export type WeatherApiCondition = {
  text: string, // Weather condition text
  icon: string, // Weather icon url
  code: number // Weather condition unique code.
}

export type WeatherApiCurrent = {
  last_updated:	string, //	Local time when the real time data was updated.
  last_updated_epoch:	number, // Local time when the real time data was updated in unix time.
  temp_c:	number, //	Temperature in celsius
  temp_f:	number, //	Temperature in fahrenheit
  feelslike_c:	number, //	Feels like temperature in celsius
  feelslike_f:	number, //	Feels like temperature in fahrenheit
  condition: WeatherApiCondition,
  wind_mph:	number, //	Wind speed in miles per hour
  wind_kph:	number, //	Wind speed in kilometer per hour
  wind_degree:	number, //	Wind direction in degrees
  wind_dir:	string, //	Wind direction as 16 point compass. e.g.: NSW
  pressure_mb:	number, //	Pressure in millibars
  pressure_in:	number, //	Pressure in inches
  precip_mm:	number, //	Precipitation amount in millimeters
  precip_in:	number, //	Precipitation amount in inches
  humidity:	number, //	Humidity as percentage
  cloud:	number, //	Cloud cover as percentage
  is_day:	number, //	1 = Yes 0 = No Whether: to, show day condition icon or night icon
  uv:	number, //	UV Index
  gust_mph:	number, //	Wind gust in miles per hour
  gust_kph:	number, //	Wind gust in kilometer per hour
}

export type WeatherApiLocation = {
  lat: number,
  lon: number,
  name: string,
  region: string,
  country: string,
  tz_id: string,
  localtime_epoch: number,
  localtime: string
};

export type WeatherApiForecastDay = {
  date: string,
  date_epoch: number,
  day: WeatherApiDay,
  astro: WeatherApiAstro,
  air_quality: WeatherApiAqi,
  hour: WeatherApiHour
}

export type WeatherApiDay = {
  maxtemp_c:	number, //	Maximum temperature in celsius for the day.
  maxtemp_f:	number, //	Maximum temperature in fahrenheit for the day
  mintemp_c:	number, //	Minimum temperature in celsius for the day
  mintemp_f:	number, //	Minimum temperature in fahrenheit for the day
  avgtemp_c:	number, //	Average temperature in celsius for the day
  avgtemp_f:	number, //	Average temperature in fahrenheit for the day
  maxwind_mph:	number, //	Maximum wind speed in miles per hour
  maxwind_kph:	number, //	Maximum wind speed in kilometer per hour
  totalprecip_mm:	number, //	Total precipitation in milimeter
  totalprecip_in:	number, //	Total precipitation in inches
  totalsnow_cm:	number, //	Total snowfall in centimeters
  avgvis_km:	number, //	Average visibility in kilometer
  avgvis_miles:	number, //	Average visibility in miles
  avghumidity:	number, //	Average humidity as percentage
  condition: WeatherApiCondition,
  uv:	number, //	UV Index
  daily_will_it_rain:	number, //	1 = Yes 0 = No - Will it will rain or not
  daily_will_it_snow:	number, //	1 = Yes 0 = No - Will it snow or not
  daily_chance_of_rain:	number, //	Chance of rain as percentage
  daily_chance_of_snow:	number, //	Chance of snow as percentage
}

export type WeatherApiAstroMoonPhases = "New Moon" | "Waxing Crescent" | "First Quarter" | "Waxing Gibbous" | "Full Moon" | "Waning Gibbous" | "Last Quarter" | "Waning Crescent";

export type WeatherApiAstro = {
  sunrise:	string //	Sunrise time
  sunset:	string //	Sunset time
  moonrise:	string //	Moonrise time
  moonset:	string //	Moonset time
  moon_phase:	WeatherApiAstroMoonPhases
  moon_illumination:	number //	Moon illumination as %
}

export type WeatherApiHour = {
  time_epoch:	number, // Time as epoch
  time:	string, // Date and time
  temp_c:	number, // Temperature in celsius
  temp_f:	number, // Temperature in fahrenheit
  condition: WeatherApiCondition,
  wind_mph:	number, // Maximum wind speed in miles per hour
  wind_kph:	number, // Maximum wind speed in kilometer per hour
  wind_degree:	number, // Wind direction in degrees
  wind_dir:	string, // Wind direction as 16 point compass. e.g.: NSW
  pressure_mb:	number, // Pressure in millibars
  pressure_in:	number, // Pressure in inches
  precip_mm:	number, // Precipitation amount in millimeters
  precip_in:	number, // Precipitation amount in inches
  snow_cm:	number, // Snowfall in centimeters
  humidity: number, // Humidity as percentage
  cloud: number, // Cloud cover as percentage
  feelslike_c:	number, // Feels like temperature as celcius
  feelslike_f:	number, // Feels like temperature as fahrenheit
  windchill_c:	number, // Windchill temperature in celcius
  windchill_f:	number, // Windchill temperature in fahrenheit
  heatindex_c:	number, // Heat index in celcius
  heatindex_f:	number, // Heat index in fahrenheit
  dewpoint_c:	number, // Dew point in celcius
  dewpoint_f:	number, // Dew point in fahrenheit
  will_it_rain: number, // 1 = Yes 0 = No - Will it will rain or not
  will_it_snow: number, // 1 = Yes 0 = No - Will it snow or not
  is_day: number, // 1 = Yes 0 = No - Whether to show day condition icon or night icon
  vis_km:	number, // Visibility in kilometer
  vis_miles:	number, // Visibility in miles
  chance_of_rain: number, // Chance of rain as percentage
  chance_of_snow: number, // Chance of snow as percentage
  gust_mph:	number, // Wind gust in miles per hour
  gust_kph:	number, // Wind gust in kilometer per hour
  uv:	number, // UV Index
  short_rad:	number, // Shortwave solar radiation or Global horizontal irradiation (GHI) W/m²
  diff_rad:	number, // Diffuse Horizontal Irradiation (DHI) W/m²
  air_quality: WeatherApiAqi, // See aqi element
}

export type WeatherApiAqi = {
  co: number, //	Carbon Monoxide (μg/m3)
  o3: number, //	Ozone (μg/m3)
  no2: number, //	Nitrogen dioxide (μg/m3)
  so2: number, //	Sulphur dioxide (μg/m3)
  pm2_5: number, //	PM2.5 (μg/m3)
  pm10: number, //	PM10 (μg/m3)
  "us-epa-index":	number, //	US - EPA standard. 1 means Good 2 means Moderate 3 means Unhealthy for sensitive group 4 means Unhealthy 5 means Very Unhealthy 6 means Hazardous
  "gb-defra-index":	number, //	UK Defra Index (See table below)
}