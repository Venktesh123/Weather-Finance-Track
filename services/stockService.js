const yahooFinance = require("yahoo-finance2").default;
require("dotenv").config();
const axios = require("axios");

const fetchStockData = async (companyName) => {
  try {
    // Fetch ticker symbol from Yahoo Finance
    const query = await yahooFinance.search(companyName);
    const symbol = query.quotes[0].symbol;

    // Use the symbol to fetch stock data from Alpha Vantage
    const apiKey = process.env.STOCK_API_KEY;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    const response = await axios.get(url);
    console.log(response.data, "data");
    return response.data;
  } catch (error) {
    console.error("Stock API error:", error.message);
    throw new Error("Failed to fetch stock data.");
  }
};

module.exports = { fetchStockData };
