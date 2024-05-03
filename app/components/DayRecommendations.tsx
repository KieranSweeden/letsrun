function DayRecommendation({ forecastDay, language }) {
  // should be done server-side
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateFormatter = new Intl.DateTimeFormat(language, {
    dateStyle: "long",
    timeStyle: "short",
    timeZone,
  });
  const date = dateFormatter.format(new Date(forecastDay.date_epoch * 1000));
  return (
    <div>
      <h3>{date}</h3>
      <p>
        <strong>Average humidity:</strong>&nbsp;
        {forecastDay.day.avghumidity}
      </p>
      <p>
        <strong>Average temperature:</strong>&nbsp;
        {forecastDay.day.avgtemp_c}°C
      </p>
      <p>
        <strong>Chance of rain:</strong>&nbsp;
        {forecastDay.day.daily_chance_of_rain}%
      </p>
    </div>
  );
}

export default function DayRecommendations({
  dayForecast,
  location,
  language,
}) {
  return (
    <section>
      <h2>
        Results for {location.name}, {location.region} in {location.country}
      </h2>
      {dayForecast.map((forecastDay) => (
        <DayRecommendation
          key={forecastDay.date_epoch}
          forecastDay={forecastDay}
          language={language}
        />
      ))}
    </section>
  );
}
