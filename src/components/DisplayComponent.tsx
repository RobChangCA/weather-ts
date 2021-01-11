import React from "react";

type Props = {
  locationInfo: any;
  airInfo: any;
};

const DisplayComponent: React.FC<Props> = ({ locationInfo, airInfo }) => {
  return (
    <pre>
      {JSON.stringify(locationInfo?.currently, null, 4)}
      {JSON.stringify(airInfo?.data.aqi, null, 4)}
    </pre>
  );
};

export default DisplayComponent;
