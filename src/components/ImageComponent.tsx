import React from "react";
import styled from "styled-components";
import { ScreenType } from "../App";
import { getAQIStatus, getTemperatureStatus } from "./statusUtils";
import { TemperatureStatus } from "./types";

const ImageContainer = styled("div")`
  height: 400px;
  width: 400px;
  background: blue;
`;

type Props = {
  screen: ScreenType;
  darkSkyData: any;
  AQIData: any;
};
type OverviewStatus = {};

type AQIStatus = {};
type UVStatus = {};
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
const getAQIImage = (status: AQIStatus) => {};
const getUVImage = (status: UVStatus) => {};
const getCovidImage = (status: CovidStatus) => {};

const ImageComponent: React.FC<Props> = ({ screen, darkSkyData, AQIData }) => {
  const image = (screen: ScreenType) => {
    switch (screen) {
      case "overview": {
        getOverviewImage(darkSkyData.currently.icon);
        break;
      }
      case "temperature": {
        const status = getTemperatureStatus(
          darkSkyData.currently.apparentTemperature
        );
        getTemperatureImage(status);
        break;
      }
      case "aqi": {
        const status = getAQIStatus(status);
        getAQIImage(status);
        break;
      }
      case "uv": {
        getUVImage(status);
        break;
      }
      case "covid": {
        getCovidImage(status);
      }
    }
  };
  return <ImageContainer>{image}</ImageContainer>;
};

export default ImageComponent;
