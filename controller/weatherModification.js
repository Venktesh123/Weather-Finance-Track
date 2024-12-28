const Weather = require("../models/Weather"); // Adjust the path

// Add new weather data
const addWeather = async (req, res) => {
  try {
    const { location, data } = req.body;
    const weather = new Weather({ location, data });
    const savedWeather = await weather.save();
    res.status(201).json(savedWeather);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add weather data", details: error.message });
  }
};

// Delete weather data by ID
const deleteWeather = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWeather = await Weather.findByIdAndDelete(id);
    if (!deletedWeather) {
      return res.status(404).json({ error: "Weather data not found" });
    }
    res.status(200).json({ message: "Weather data deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete weather data", details: error.message });
  }
};

// Update weather data by ID
const updateWeather = async (req, res) => {
  try {
    const { id } = req.params;
    const { location, data } = req.body;
    const updatedWeather = await Weather.findByIdAndUpdate(
      id,
      { location, data },
      { new: true, runValidators: true }
    );
    if (!updatedWeather) {
      return res.status(404).json({ error: "Weather data not found" });
    }
    res.status(200).json(updatedWeather);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update weather data", details: error.message });
  }
};

module.exports = { addWeather, deleteWeather, updateWeather };
