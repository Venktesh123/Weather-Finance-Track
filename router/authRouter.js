const express = require("express");
const router = express.Router();
const { SignUp } = require("../controller/signUp");
const { login, logout } = require("../controller/signIn");
router.post("/signup", SignUp);
router.post("/login", login);
router.post("/logout", logout);
module.exports = router;
