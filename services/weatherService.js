const axios = require("axios");
require("dotenv").config();

const fetchWeather = async (Location) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Weather API error:", error.message);
    throw new Error("Failed to fetch weather data.");
  }
};

module.exports = { fetchWeather };
