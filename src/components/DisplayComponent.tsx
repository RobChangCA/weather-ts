import React from "react";
import { ScreenType } from "../App";
import DetailsComponent from "./DetailsComponent";
import ImageComponent from "./ImageComponent";

type Props = {
  locationInfo: any;
  airInfo: any;
  city: string;
  screen: ScreenType;
};

const DisplayComponent: React.FC<Props> = ({
  city,
  locationInfo,
  airInfo,
  screen,
}) => {
  return (
    <div>
      <h1>{city}</h1>
      <h2>{screen}</h2>
      <ImageComponent {...{ screen }} />
      <DetailsComponent />
      {/* <pre>
        {JSON.stringify(locationInfo, null, 4)}
        {JSON.stringify(airInfo, null, 4)}
      </pre> */}
    </div>
  );
};

export default DisplayComponent;
