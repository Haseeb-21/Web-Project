const express = require("express");
const authController = require("../controller/auth_controller");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/register", authController.register);
router.get("/login", forwardAuthenticated, authController.login);
router.post("/register", authController.registerSubmit);
router.post("/login", authController.loginSubmit);
router.get('/logout', authController.logout);

module.exports = router;
