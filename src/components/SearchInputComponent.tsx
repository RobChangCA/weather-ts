import React, { useState } from "react";
import cities from "cities.json";
import { Coords } from "../App";

type CityProps = {} & CityType;
type Props = {
  setLocation: React.Dispatch<React.SetStateAction<Coords>>;
};

const City: React.FC<CityProps> = ({ name, country }) => {
  return (
    <h2>
      {name} {country}
    </h2>
  );
};

const SearchInputComponent: React.FC<Props> = ({ setLocation }) => {
  const [filteredCities, setFilteredCities] = useState<CityType[]>([]);
  const [inputText, setInputText] = useState("");
  const handleChange = (text: string) => {
    setInputText(text);
    setFilteredCities(
      cities.filter((city: CityType) =>
        city.name.toUpperCase().includes(text.toUpperCase())
      )
    );
  };
  const handleCityClicked = (city: CityType) => {
    setInputText(city.name);
    setLocation({ lat: +city.lat, lng: +city.lng });
    setFilteredCities([]);
  };
  const [selectedCity, setSelectedCity] = useState<CityType | null>();
  return (
    <>
      <input onChange={(e) => handleChange(e.target.value)} value={inputText} />
      <ul>
        {filteredCities.slice(0, 5).map((city) => (
          <li onClick={() => handleCityClicked(city)}>
            <City {...city} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchInputComponent;
