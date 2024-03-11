import axios from "axios";
import { WEATHER_BASE_URL, weatherApiKey } from "../api/weather";

const cityInput = document.querySelector(".city-input");

export const getWeatherData = async (city) => {
  const url = `${WEATHER_BASE_URL}?q=${city}&appid=${weatherApiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    console.log(response.data);

    // displayWeather(response.data);
  } catch (error) {
    console.error("There was an error retrieving the weather data", error);
  }
};
