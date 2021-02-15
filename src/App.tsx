import React, { useEffect, useState } from "react";
import InfoWrapper from "./components/InfoWrapper";
import getWeather from "./services/getWeather";
import getAQI from "./services/getAQI";
import SearchInputComponent from "./components/SearchInputComponent";
import MenuComponent from "./components/MenuComponent";
import { airMock, weatherMock } from "./components/mock";

export type Location = { lat: number; lng: number; city: string };
export type ScreenType = "weather" | "temperature" | "aqi" | "uv" | "covid";
function App() {
  const [location, setLocation] = useState<Location>({
    lat: 43.6532,
    lng: -79.3832,
    city: "Toronto",
  });
  const [screen, setScreen] = useState<ScreenType>("weather");
  const [weatherInfo, setWeatherInfo] = useState(weatherMock);
  const [airInfo, setAirInfo] = useState(airMock);
  const [loading, setLoading] = useState(false);
  const getLocationInfo = async () => {
    console.log("fetch");
    if (!location) return;
    setLoading(true);
    // setWeatherInfo(await getWeather({ lat: location.lat, lng: location.lng }));
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
      <InfoWrapper city={location.city} {...{ weatherInfo, airInfo, screen }} />
    </>
  );
}

export default App;
