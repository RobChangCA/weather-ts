import React from "react";
import styled from "styled-components";
import { ScreenType } from "../App";
import { getAQIStatus, getTemperatureStatus, getUVStatus } from "./statusUtils";
import { AQIStatus, TemperatureStatus, UVStatus, WeatherStatus } from "./types";

const ImageContainer = styled("div")`
  height: 400px;
  width: 400px;
  background: blue;
`;

type Props = {
  screen: ScreenType;
  weatherInfo: any;
  airInfo: any;
};

type CovidStatus = {};

const getWeatherImage = (status: WeatherStatus) => {
  switch (status) {
    case "clear-day": {
      return "clear-day image";
    }
    case "clear-night": {
      return "clear-night image";
    }
    case "rain": {
      return "rain image";
    }
    case "snow": {
      return "snow image";
    }
    case "sleet": {
      return "sleet image";
    }
    case "wind": {
      return "wind image";
    }
    case "fog": {
      return "fog image";
    }
    case "cloudy": {
      return "cloudy image";
    }
    case "partly-cloudy-day": {
      return "partly-cloudy-day image";
    }
    case "partly-cloudy-night": {
      return "partly-cloudy-night image";
    }
  }
};
const getTemperatureImage = (status: TemperatureStatus) => {
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
const getAQIImage = (status: AQIStatus) => {
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
const getUVImage = (status: UVStatus) => {
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
const getCovidImage = (status: CovidStatus) => {};

const ImageComponent: React.FC<Props> = ({ screen, weatherInfo, airInfo }) => {
  const getImage = (screen: ScreenType) => {
    switch (screen) {
      case "weather": {
        return getWeatherImage(weatherInfo.currently.icon);
      }
      case "temperature": {
        const status = getTemperatureStatus(
          weatherInfo.currently.apparentTemperature
        );
        return getTemperatureImage(status);
      }
      case "aqi": {
        const status = getAQIStatus(airInfo.data.aqi);
        return getAQIImage(status);
      }
      case "uv": {
        const status = getUVStatus(weatherInfo.currently.uvIndex);
        return getUVImage(status);
      }
      case "covid": {
        // getCovidImage(status);
      }
    }
  };
  return <ImageContainer>{getImage(screen)}</ImageContainer>;
};

export default ImageComponent;
