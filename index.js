const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const reminderRoute = require("./routes/reminderRoute");
const authRoute = require("./routes/authRoute");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret", //probably use something else for checker
    resave: true,
    saveUninitialized: false,
  })
);

const passport = require("./middleware/passport");
const { ensureAuthenticated } = require("./middleware/checkAuth")

// Middleware
//app.use(express.json());
// app.use(expressLayouts);
app.use(passport.initialize());
app.use(passport.session());


// Routes start here

//app.get("/reminders", ensureAuthenticated, reminderController.list);

app.get("/reminders", reminderController.list);
app.use("/reminder", reminderRoute);
app.use("/auth", authRoute)
/*
// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit);
*/
app.get("/weather", reminderController.getWeather);

app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
