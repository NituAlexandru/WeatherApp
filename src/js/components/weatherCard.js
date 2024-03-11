export const displayWeather = (data) => {
  console.log(data);

  // Selecționează containerul unde vrei să adaugi cardul de vreme
  const weatherContainer = document.querySelector("#weather-container"); // Asumând că ai un element cu id="weather-container" în HTML-ul tău

  // Creează elementul card de vreme
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  // Adaugă conținutul cardului, bazat pe datele primate
  weatherCard.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }.png" alt="Weather Icon" class="weather-icon" />
    <h2 class="city-name">${data.name}</h2>
    <p class="temperature">Temperature: ${Math.round(data.main.temp)}°C</p>
    <p class="min-max-temp">Min: ${Math.round(
      data.main.temp_min
    )}°C | Max: ${Math.round(data.main.temp_max)}°C</p>
    <p class="humidity">Humidity: ${data.main.humidity}%</p>
    <p class="pressure">Pressure: ${data.main.pressure} hPa</p>
    <p class="wind-speed">Wind Speed: ${Math.round(
      data.wind.speed
    )} meter/sec</p>
    <p class="sunrise-sunset">Sunrise: ${new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })} | Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
    <p class="feels-like">Feels Like: ${Math.round(data.main.feels_like)}°C</p>
    <p class="weather-description">${data.weather[0].description}</p>
`;

  // Verifică dacă există deja un card de vreme și îl înlocuiește, altfel adaugă noul card
  const existingCard = weatherContainer.querySelector(".weather-card");
  if (existingCard) {
    weatherContainer.replaceChild(weatherCard, existingCard);
  } else {
    weatherContainer.appendChild(weatherCard);
  }
};
