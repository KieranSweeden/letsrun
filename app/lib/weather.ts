import { WEATHER_API_KEY, WEATHER_API_V1_URL } from "~/constants";

interface BuildForecastRequestUrlArgs {
  location: string | null;
}

function buildForecastRequestUrl({ location }: BuildForecastRequestUrlArgs): URL {
  const url = new URL(WEATHER_API_V1_URL + "forecast.json");
  url.searchParams.set("key", WEATHER_API_KEY);
  url.searchParams.set("days", "3");
  url.searchParams.set("q", location || "");
  url.searchParams.set("alerts", "no");
  url.searchParams.set("aqi", "no");
  return url;
}

interface GetRecommendationsArgs {
  location: string | null;
}

export async function getRecommendations(args: GetRecommendationsArgs) {
  if (!args.location) {
    return null;
  }
  
  const url = buildForecastRequestUrl({ location: args.location });
  const response = await fetch(url);
  const body = await response.json();
  
  return {
    location: body.location,
    forecast: body.forecast
  };
}