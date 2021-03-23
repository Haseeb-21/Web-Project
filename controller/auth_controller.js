const express = require("express");
const passport = require("../middleware/passport");
const { use } = require("passport");
let database = require("../database");
const router = express.Router();

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
      passport.authenticate("local", {
        successRedirect: "/reminders",
        failureRedirect: "/login",
      })
  },


  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
