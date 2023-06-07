"use strict";

import { fetchWeatherData } from "./api.js";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorDiv = document.querySelector(".error");
const weatherDiv = document.querySelector(".weather");
const cityDiv = document.querySelector(".city");
const tempDiv = document.querySelector(".temp");
const humidityDiv = document.querySelector(".humidity");
const windDiv = document.querySelector(".wind");

const weatherImages = {
  CLouds: "images/clouds.png",
  Rain: "images/rain.png",
  Drizzle: "images/drizzle.png",
  Clear: "images/clear.png",
  Mist: "images/mist.png",
};

function updateWeatherUI(weatherData) {
  cityDiv.innerHTML = weatherData.name;
  tempDiv.innerHTML = Math.round(weatherData.main.temp) + "°C";
  humidityDiv.innerHTML = weatherData.main.humidity + "%";
  windDiv.innerHTML = weatherData.wind.speed + "km/h";

  const weatherFromResponse = weatherData.weather[0].main;
  weatherIcon.src = weatherImages[weatherFromResponse];

  weatherDiv.style.display = "block";
  errorDiv.style.display = "none";
}

function displayError() {
  errorDiv.style.display = "block";
  weatherDiv.style.display = "none";
}

async function checkWeather(city) {
  try {
    const weatherData = await fetchWeatherData(city);
    updateWeatherUI(weatherData);
  } catch (error) {
    displayError();
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
