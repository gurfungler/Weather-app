const btn = document.getElementById("submit");
const text = document.getElementById("query");
const weatherLi = document.getElementById("weather");
const locaitonLi = document.getElementById("location");
const tempLi = document.getElementById("temp");
const feels_likeLi = document.getElementById("feels_like");
const windLi = document.getElementById("wind");
const humidityLi = document.getElementById("humidity");
btn.addEventListener("click", weather);

function weather() {
  let location = text.value;
  getWeather(location);
}
async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=44304a8de912f8200bd29a6d30a76269`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  displayWeather(weatherData);
}

function displayWeather(weatherData) {
  weatherLi.innerHTML = weatherData.weather[0].description;
  feels_likeLi.innerHTML =
    "Feels Like: " + kToF(weatherData.main.feels_like) + "°F";
  locaitonLi.innerHTML = weatherData.name;
  tempLi.innerHTML = kToF(weatherData.main.temp) + "°F";
  humidityLi.innerHTML = "Humidity: " + weatherData.main.humidity + "%";
  windLi.innerHTML = "Wind: " + Math.floor(weatherData.wind.speed);
}

function kToF(k) {
  return Math.floor(((k - 273.15) * 9) / 5 + 32);
}
