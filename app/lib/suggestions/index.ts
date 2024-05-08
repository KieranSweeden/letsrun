import { getLocationForecast } from "../weatherApi";
import { Suggestion } from "./types";

interface GetSuggestionsArgs {
  location: string;
}

export interface GetSuggestionsResponse {
  suggestions: Suggestion[];
  location: {
    name: string;
    region: string;
    country: string;
  };
}

export const getSuggestions = async (
  args: GetSuggestionsArgs,
): Promise<GetSuggestionsResponse> => {
  const forecastResponse = await getLocationForecast(args.location);
  if (forecastResponse === null) {
    return {
      location: {
        name: "Unknown location",
        region: "Unknown region",
        country: "Unknown country",
      },
      suggestions: [],
    };
  }

  return {
    location: {
      name: forecastResponse.location?.name ?? "Unknown location",
      region: forecastResponse.location?.region ?? "Unknown region",
      country: forecastResponse.location?.country ?? "Unknown country",
    },
    suggestions: forecastResponse.forecast.forecastday.map((day) => {
      return {
        location: {
          name: forecastResponse.location?.name ?? "Unknown location",
          region: forecastResponse.location?.region ?? "Unknown region",
          country: forecastResponse.location?.country ?? "Unknown country",
        },
        timestamp: day.date_epoch,
        temperature: {
          celsius: {
            average: day.day.avgtemp_c,
            min: day.day.mintemp_c,
            max: day.day.maxtemp_c,
          },
          fahrenheit: {
            average: day.day.avgtemp_f,
            min: day.day.mintemp_f,
            max: day.day.maxtemp_f,
          },
        },
        rain: {
          chance: day.day.daily_chance_of_rain,
        },
        snow: {
          chance: day.day.daily_chance_of_snow,
        },
      };
    }),
  };
};
