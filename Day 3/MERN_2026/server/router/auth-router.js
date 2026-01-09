const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");

router.route("/register").post(authController.register);

router.route("/login").get(authController.login);
module.exports = router;
