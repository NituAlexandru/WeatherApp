import axios from "axios";
import { WEATHER_BASE_URL, weatherApiKey } from "../api/weather";
import { displayWeather } from "./weatherCard";

export const getWeatherData = async (city) => {
  const url = `${WEATHER_BASE_URL}?q=${city}&appid=${weatherApiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    displayWeather(response.data);
  } catch (error) {
    console.error("There was an error retrieving the weather data", error);
  }
};
