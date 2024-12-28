const Stock = require("../models/stockModel");
const { fetchStockData } = require("../services/stockService");

const getStock = async (req, res) => {
  const { company } = req.body;

  try {
    // Fetch data from external API
    const stockData = await fetchStockData(company);
    console.log(stockData, "stockData");

    // Save in MongoDB
    const stock = new Stock({ company, data: stockData });
    await stock.save();

    res.status(200).json({ success: true, data: stockData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getStock };
