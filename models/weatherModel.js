const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  location: String,
  data: Object,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Weather", weatherSchema);
