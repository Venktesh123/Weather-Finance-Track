const express = require("express");
const connectDB = require("./config/dbConnnection");
require("dotenv").config();
const weatherRouter = require("./router/weatherRouter");
const stockRouter = require("./router/finanaceRouter");
const authRouter = require("./router/authRouter");
const stockmodificationRouter = require("./router/stockmodifyingRouter");
const weathermodificationRouter = require("./router/weatherModifyingRouter");
const authMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();
app.get("/", (req, res) => {
  res.send("Backend Working ON Port 3000");
});
app.use("/api/weather", weatherRouter);
app.use("/api/stock", stockRouter);
app.use("/api", authRouter);
app.use(authMiddleware);
app.use("/api/v1", stockmodificationRouter);
app.use("/api/v2", weathermodificationRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
