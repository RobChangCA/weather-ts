import React, { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";
import DisplayComponent from "./components/DisplayComponent";
import getWeather from "./services/getWeather";
import getAQI from "./services/getAQI";

export type Coords = { lat: number; lng: number };

function App() {
  const [location, setLocation] = useState<Coords>();
  const [locationInfo, setLocationInfo] = useState();
  const [airInfo, setAirInfo] = useState();
  const getLocationInfo = async () => {
    if (!location) return;
    setLocationInfo(await getWeather(location));
    setAirInfo(await getAQI(location));
  };

  useEffect(() => {
    getLocationInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      <SearchComponent setLocation={setLocation} />
      <DisplayComponent airInfo={airInfo} locationInfo={locationInfo} />
    </>
  );
}

export default App;
