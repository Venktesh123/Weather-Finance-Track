const axios = require("axios");
require("dotenv").config();

const fetchWeather = async (location) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchWeather };
