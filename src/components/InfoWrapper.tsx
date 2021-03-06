import React from "react";
import { ScreenType } from "../App";
import DetailsComponent from "./DetailsComponent";
import ImageComponent from "./ImageComponent";

type Props = {
  weatherInfo: any;
  airInfo: any;
  city: string;
  screen: ScreenType;
};

const InfoWrapper: React.FC<Props> = ({
  city,
  weatherInfo,
  airInfo,
  screen,
}) => {
  return (
    <div>
      <h1>{city}</h1>
      <h2>{screen}</h2>
      <ImageComponent {...{ screen, weatherInfo, airInfo }} />
      <DetailsComponent {...{ screen, weatherInfo, airInfo }} />
    </div>
  );
};

export default InfoWrapper;
