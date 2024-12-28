const axios = require("axios");
require("dotenv").config();

const fetchStock = async (symbol) => {
  const apiKey = process.env.STOCK_API_KEY;
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchStock };
