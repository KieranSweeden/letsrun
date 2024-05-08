export type Suggestion = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  timestamp: number;
  temperature: {
    celsius: {
      min: number;
      max: number;
      average: number;
    };
    fahrenheit: {
      min: number;
      max: number;
      average: number;
    };
  };
  rain: {
    chance: number;
  };
  snow: {
    chance: number;
  };
};
