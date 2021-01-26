import { TemperatureStatus } from "./types";

export const getTemperatureStatus = (
  temperature: number
): TemperatureStatus => {
  if (temperature <= -20) {
    return "hellaCold";
  }
  if (temperature <= -10) {
    return "veryCold";
  }
  if (temperature <= 0) {
    return "cold";
  }
  if (temperature <= 20) {
    return "cool";
  }
  if (temperature <= 25) {
    return "warm";
  }
  if (temperature <= 30) {
    return "hot";
  } else {
    return "veryHot";
  }
};

export const getAQIStatus = (air: number) => {
  if (air < 50) {
    return "green";
  }
  if (air < 100) {
    return "yellow";
  }
  if (air < 150) {
    return "orange";
  }
  if (air < 200) {
    return "red";
  }
  if (air < 300) {
    return "purple";
  } else {
    return "maroon";
  }
};

export const getUVStatus = (uv: number) => {
  if (uv < 3) return "green";
  if (uv < 6) return "yellow";
  if (uv < 8) return "orange";
  if (uv < 11) return "red";
  else return "violet";
};

export const getCovidStatus = (rate: any) => {};
