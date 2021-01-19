declare module "cities.json" {
  export type CityType = {
    country: string;
    name: string;
    lat: string;
    lng: string;
  };
  const cities: CityType[];
  export default cities;
}
