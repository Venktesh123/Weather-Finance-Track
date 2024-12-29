const Stock = require("../models/Stock");
const { fetchStockData } = require("../services/stockService");

const getStock = async (req, res) => {
  const { company } = req.body;

  try {
    // Fetch data from external API
    const stockData = await fetchStockData(company);

    // Save the original data object in MongoDB
    const stock = new Stock({ company, data: stockData });
    await stock.save();

    // Extract and format Meta Data as key-value pairs
    const metaData = stockData["Meta Data"];

    // Extract the latest 7 entries from "Time Series (Daily)" and format as an array
    const timeSeries = stockData["Time Series (Daily)"];
    const latestEntries = Object.entries(timeSeries) // Convert to an array of key-value pairs
      .slice(0, 7) // Take the latest 7 entries
      .map(([date, values]) => ({
        date,
        open: values["1. open"],
        high: values["2. high"],
        low: values["3. low"],
        close: values["4. close"],
        volume: values["5. volume"],
      }));

    res.status(200).json({
      success: true,
      metaData: metaData, // Include Meta Data directly as key-value pairs
      data: latestEntries, // Include the formatted latest 7 entries as an array
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getStock };
