import React from "react";
import { ScreenType } from "../App";
import { getAQIStatus, getTemperatureStatus, getUVStatus } from "./statusUtils";
import { TemperatureStatus, AQIStatus, UVStatus, WeatherStatus } from "./types";
type Props = {
  screen: ScreenType;
  weatherInfo: any;
  airInfo: any;
};

const getWeatherText = (status: WeatherStatus) => {
  switch (status) {
    case "clear-day": {
      return "clear-day text";
    }
    case "clear-night": {
      return "clear-night text";
    }
    case "rain": {
      return "rain text";
    }
    case "snow": {
      return "snow text";
    }
    case "sleet": {
      return "sleet text";
    }
    case "wind": {
      return "wind text";
    }
    case "fog": {
      return "fog text";
    }
    case "cloudy": {
      return "cloudy text";
    }
    case "partly-cloudy-day": {
      return "partly-cloudy-day text";
    }
    case "partly-cloudy-night": {
      return "partly-cloudy-night text";
    }
  }
};
const getTemperatureText = (status: TemperatureStatus) => {
  switch (status) {
    case "hellaCold": {
      return <h2>Hella cold image</h2>;
    }
    case "veryCold": {
      return <h2>veryCold image</h2>;
    }
    case "cold": {
      return <h2> cold image</h2>;
    }
    case "cool": {
      return <h2>cool image</h2>;
    }
    case "warm": {
      return <h2>warm image</h2>;
    }
    case "hot": {
      return <h2>Hot image</h2>;
    }
    case "veryHot": {
      return <h2>veryHot image</h2>;
    }
  }
};
const getAQIText = (status: AQIStatus) => {
  switch (status) {
    case "green":
      return "green image";
    case "yellow":
      return "yellow image";
    case "orange":
      return "orange image";
    case "red":
      return "red image";
    case "purple":
      return "purple image";
    case "maroon":
      return "maroon image";
  }
};
const getUVText = (status: UVStatus) => {
  switch (status) {
    case "green":
      return "green image";
    case "yellow":
      return "yellow image";
    case "orange":
      return "orange image";
    case "red":
      return "red image";
    case "violet":
      return "violet image";
  }
};

const DetailsComponent: React.FC<Props> = ({
  screen,
  weatherInfo,
  airInfo,
}) => {
  const getText = (screen: ScreenType) => {
    switch (screen) {
      case "weather": {
        return getWeatherText(weatherInfo.currently.icon);
      }
      case "temperature": {
        const status = getTemperatureStatus(
          weatherInfo.currently.apparentTemperature
        );
        return getTemperatureText(status);
      }
      case "aqi": {
        const status = getAQIStatus(airInfo.data.aqi);
        return getAQIText(status);
      }
      case "uv": {
        const status = getUVStatus(weatherInfo.currently.uvIndex);
        return getUVText(status);
      }
      case "covid": {
        // getCovidImage(status);
      }
    }
  };
  return <div>{getText(screen)}</div>;
};
export default DetailsComponent;
