const Stock = require("../models/Stock"); // Adjust the path based on your file structure

// Add a new stock
const addStock = async (req, res) => {
  try {
    const { company, data } = req.body;
    const stock = new Stock({ company, data });
    const savedStock = await stock.save();
    res.status(201).json(savedStock);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add stock", details: error.message });
  }
};

// Delete a stock by ID
const deleteStock = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStock = await Stock.findByIdAndDelete(id);
    if (!deletedStock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.status(200).json({ message: "Stock deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete stock", details: error.message });
  }
};

// Update a stock by ID
const updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, data } = req.body;
    const updatedStock = await Stock.findByIdAndUpdate(
      id,
      { company, data },
      { new: true, runValidators: true } // Return the updated document and validate input
    );
    if (!updatedStock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.status(200).json(updatedStock);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update stock", details: error.message });
  }
};

module.exports = { addStock, deleteStock, updateStock };
