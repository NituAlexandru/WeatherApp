import { displayWeather, getWeatherData } from "./components/searchBar.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".weather-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = document.querySelector(".city-input").value;
    if (city) {
      try {
        await getWeatherData(city);
      } catch (error) {
        console.error("There was an error retrieving the weather data", error);
      }
    }
  });
});
