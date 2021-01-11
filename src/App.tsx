import React, { useEffect, useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import getWeather from "./services/getWeather";
import getAQI from "./services/getAQI";
import SearchInputComponent from "./components/SearchInputComponent";

export type Coords = { lat: number; lng: number };

function App() {
  const [location, setLocation] = useState<Coords>({
    lat: 43.6532,
    lng: -79.3832,
  });
  const [locationInfo, setLocationInfo] = useState();
  const [airInfo, setAirInfo] = useState();
  const [loading, setLoading] = useState(false);
  const getLocationInfo = async () => {
    if (!location) return;
    setLoading(true);
    setLocationInfo(await getWeather(location));
    setAirInfo(await getAQI(location));
    setLoading(false);
  };

  useEffect(() => {
    getLocationInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      <SearchInputComponent setLocation={setLocation} />
      {loading && "Loading...."}
      <DisplayComponent airInfo={airInfo} locationInfo={locationInfo} />
    </>
  );
}

export default App;
