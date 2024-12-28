const express = require("express");
const connectDB = require("./config/dbConnnection"); // Import the MongoDB connection
require("dotenv").config(); // Import dotenv to load environment variables

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Sample route
app.get("/", (req, res) => {
  res.send("MongoDB connection is successful!");
});

// Start the server
const PORT = process.env.PORT || 3000; // Load PORT from .env or use default 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
