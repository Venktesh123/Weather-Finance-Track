const express = require("express");
const connectDB = require("./config/dbConnnection");
require("dotenv").config();
const weatherRouter = require("./router/weatherRouter");

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();
app.use("/api/weather", weatherRouter);

app.get("/", (req, res) => {
  res.send("MongoDB connection is successful!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
