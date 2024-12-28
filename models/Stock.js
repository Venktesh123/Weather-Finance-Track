const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  company: String,
  data: Object,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Stock", stockSchema);
