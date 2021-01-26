import React from "react";
import styled from "styled-components";
import { ScreenType } from "../App";
import { getAQIStatus, getTemperatureStatus, getUVStatus } from "./statusUtils";
import { TemperatureStatus } from "./types";

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
type OverviewStatus = {};

type AQIStatus = "green" | "yellow" | "orange" | "red" | "purple" | "maroon";
type UVStatus = "green" | "yellow" | "orange" | "red" | "violet";
type CovidStatus = {};

const getOverviewImage = (status: OverviewStatus) => {
  return <h2>{status} </h2>;
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
  const image = (screen: ScreenType) => {
    switch (screen) {
      case "overview": {
        return getOverviewImage(weatherInfo.currently.icon);
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
  return <ImageContainer>{image}</ImageContainer>;
};

export default ImageComponent;
