const axios = require("axios");
require("dotenv").config();

const fetchStockData = async (symbol) => {
  const apiKey = process.env.STOCK_API_KEY;
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Stock API error:", error.message);
    throw new Error("Failed to fetch stock data.");
  }
};

module.exports = { fetchStockData };
