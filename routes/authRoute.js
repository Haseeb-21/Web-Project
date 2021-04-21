const express = require("express");
const passport = require("../middleware/passport");
const authController = require("../controller/auth_controller");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/register", authController.register);
router.get("/login", forwardAuthenticated, authController.login);
router.post("/register", authController.registerSubmit);
router.post("/login",
    passport.authenticate("local", {
        successRedirect: "../reminders",
        failureRedirect: "./login",
    })
);

module.exports = router;
