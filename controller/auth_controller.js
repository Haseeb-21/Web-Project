let database = require("../database");
const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    console.log("we getting")
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  // login
  loginSubmit: (req, res) => {
    console.log("we authenticating")
    console.log(req.body)
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/",
    })
    console.log("we authenticated")
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
