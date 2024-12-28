const express = require("express");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
const {
  addWeather,
  deleteWeather,
  updateWeather,
} = require("../controller/weatherModification");

// Apply roleMiddleware to all routes in this router

router.use(roleMiddleware(["admin"]));

router.post("/weather", addWeather);

router.delete("/weather/:id", deleteWeather);

router.put("/weather/:id", updateWeather);

module.exports = router;
