import type {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { Form, json, useLoaderData, useSearchParams } from "@remix-run/react";
import DayRecommendations from "~/components/DayRecommendations";
import { getRecommendations } from "~/lib/weather";

export const meta: MetaFunction = () => {
  return [
    { title: "LetsRun" },
    { name: "description", content: "Welcome to LetsRun!" },
  ];
};

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const acceptLanguageHeader = request.headers.get("accept-language");
  const language = acceptLanguageHeader?.split(";")[0].split(",")[0];
  const url = new URL(request.url);
  const location = url.searchParams.get("location");
  const recommendations = await getRecommendations({ location });
  return json({ recommendations, language });
};

export default function Index() {
  const [searchParams] = useSearchParams();
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Welcome to LetsRun</h1>
      <Form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          defaultValue={searchParams.get("location") || ""}
        />
        <button type="submit">Submit</button>
      </Form>
      <hr />
      {data?.recommendations?.forecast?.forecastday ? (
        <DayRecommendations
          dayForecast={data.recommendations.forecast.forecastday}
          language={data.language}
          location={data.recommendations.location}
        />
      ) : null}
    </div>
  );
}
