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

export const getAQIStatus = (air: any) => {};

export const getUVStatus = (uv: any) => {};

export const getCovidStatus = (rate: any) => {};
