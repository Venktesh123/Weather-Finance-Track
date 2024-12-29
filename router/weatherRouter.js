const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weatherController");
router.post("/data", weatherController.getWeatherdetailsByLocation);
module.exports = router;
