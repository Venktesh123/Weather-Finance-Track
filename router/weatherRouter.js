const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weatherController");
router.get("/data", weatherController.getWeatherdetailsByLocation);
module.exports = router;
