const express = require("express");
const router = express.Router();
const stockController = require("../controller/stockController");
router.get("/data", stockController.getStock);
module.exports = router;
