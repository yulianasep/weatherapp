const apiKey = "c3f648975ef916bbae9883b21856901e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

export async function fetchWeatherData(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
}
