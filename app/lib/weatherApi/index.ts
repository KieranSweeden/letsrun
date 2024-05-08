import { WEATHER_API_KEY, WEATHER_API_V1_URL } from "./constants";
import { WeatherApiForecastResponse } from "./types";

interface BuildForecastRequestUrlArgs {
  location: string | null;
}

function buildForecastRequestUrl({
  location,
}: BuildForecastRequestUrlArgs): URL {
  const url = new URL(WEATHER_API_V1_URL + "forecast.json");
  url.searchParams.set("key", WEATHER_API_KEY);
  url.searchParams.set("days", "3");
  url.searchParams.set("q", location || "");
  url.searchParams.set("alerts", "no");
  url.searchParams.set("aqi", "no");
  return url;
}

export async function getLocationForecast(
  location: string,
): Promise<WeatherApiForecastResponse | null> {
  if (!location) {
    return null;
  }

  const url = buildForecastRequestUrl({ location });
  const response = await fetch(url);
  const body = await response.json();

  return body;
}
