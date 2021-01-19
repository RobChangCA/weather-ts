import React, { useEffect, useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import getWeather from "./services/getWeather";
import getAQI from "./services/getAQI";
import SearchInputComponent from "./components/SearchInputComponent";
import MenuComponent from "./components/MenuComponent";

export type Location = { lat: number; lng: number; city: string };
export type ScreenType = "overview" | "temperature" | "aqi" | "uv" | "covid";
function App() {
  const [location, setLocation] = useState<Location>({
    lat: 43.6532,
    lng: -79.3832,
    city: "Toronto",
  });
  const [screen, setScreen] = useState<ScreenType>("overview");
  const [locationInfo, setLocationInfo] = useState();
  const [airInfo, setAirInfo] = useState();
  const [loading, setLoading] = useState(false);
  const getLocationInfo = async () => {
    console.log("fetch");
    if (!location) return;
    setLoading(true);
    // setLocationInfo(await getWeather({ lat: location.lat, lng: location.lng }));
    // setAirInfo(await getAQI({ lat: location.lat, lng: location.lng }));
    setLoading(false);
  };

  useEffect(() => {
    getLocationInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      <MenuComponent {...{ screen, setScreen }} />
      <SearchInputComponent setLocation={setLocation} />
      {loading && "Loading...."}
      <DisplayComponent
        city={location.city}
        {...{ airInfo, locationInfo, screen }}
      />
    </>
  );
}

export default App;
