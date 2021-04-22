let database = require("../database");
const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    let email = req.query.email;
    res.render("auth/register", { email: email });
  },

  // login
  loginSubmit: 
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/auth/login",
    })
  ,

  registerSubmit: (req, res) => {
    let success = true
    for(let i=0; i < database.length; i++){
      if (req.body.email == database[i].email){
        success = false
        let msg = "Email already in use."
        res.render("auth/register", { message: msg })
      }
    }
    if (success == true){
      {
        let newUser = {
          id: database.length + 1,
          email: req.body.email,
          password: req.body.password,
          reminders: [],
        }
        database.push(newUser)
      }
      let msg = "Success! Please enter your credentials again to log in."
      res.render("auth/login", { message: msg })
    }
  },
  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  },
};

module.exports = authController;
