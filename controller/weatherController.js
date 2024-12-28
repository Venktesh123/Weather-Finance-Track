const Weather = require("../models/weatherModel");
const { fetchWeather } = require("../services/weatherService");
const weather = require("../models/weatherModel");

const getWeatherdetailsByLocation = async (req, res) => {
  const { location } = req.body;
  try {
    // Fetch data from external API
    const weatherData = await fetchWeather(location);
    console.log(weatherData, "datta");

    // Save in MongoDB
    const weather = new Weather({ location, data: weatherData });
    await weather.save();

    res.status(200).json({ success: true, data: weatherData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getWeatherdetailsByLocation };