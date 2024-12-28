const express = require("express");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
const adminController = require("../controller/adminConrollers");
const {
  addStock,
  deleteStock,
  updateStock,
} = require("../controllers/stockController");
router.use(roleMiddleware(["admin"]));

router.post("/stocks", addStock);

router.delete("/stocks/:id", deleteStock);

router.put("/stocks/:id", updateStock);

module.exports = router;
