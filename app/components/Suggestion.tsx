import { type Suggestion } from "~/lib/suggestions/types";
import { type GetSuggestionsResponse } from "~/lib/suggestions";

function Suggestion({ suggestion }: { suggestion: Suggestion }) {
  return (
    <div>
      <h3>{suggestion.location.name}</h3>
      <dl>
        <dt>Temperature</dt>
        <dd>Average:&nbsp;{suggestion.temperature.celsius.average}°C</dd>
        <dd>Max:&nbsp;{suggestion.temperature.celsius.max}°C</dd>
        <dd>Min:&nbsp;{suggestion.temperature.celsius.min}°C</dd>
        <dt>Rain</dt>
        <dd>Chance:&nbsp;{suggestion.rain.chance}%</dd>
        <dt>Snow</dt>
        <dd>Chance:&nbsp;{suggestion.snow.chance}%</dd>
      </dl>
    </div>
  );
}

export default function Suggestions({
  suggestions,
  location,
}: GetSuggestionsResponse) {
  return (
    <section>
      <h2>
        Results for {location.name}, {location.region} in {location.country}
      </h2>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.timestamp} suggestion={suggestion} />
      ))}
    </section>
  );
}
