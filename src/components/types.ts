import { screens } from "./MenuComponent";

export type TemperatureStatus =
  | "hellaCold"
  | "veryCold"
  | "cold"
  | "cool"
  | "warm"
  | "hot"
  | "veryHot";

export type WeatherStatus =
  | "clear-day"
  | "clear-night"
  | "rain"
  | "snow"
  | "sleet"
  | "wind"
  | "fog"
  | "cloudy"
  | "partly-cloudy-day"
  | "partly-cloudy-night";

export type AQIStatus =
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "maroon";

export type UVStatus = "green" | "yellow" | "orange" | "red" | "violet";

export type ScreenType = typeof screens[number];
