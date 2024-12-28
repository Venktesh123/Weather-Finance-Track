const express = require("express");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();
const adminController = require("../controller/adminConrollers");

// Apply roleMiddleware to all routes in this router

router.use(roleMiddleware(["admin"]));

// Admin-specific routes
router.post("/addData", adminController.addUser);

router.delete("/deleteData", adminController.deleteUser);
router.post("/updateData", adminController.deleteUser);

module.exports = router;
