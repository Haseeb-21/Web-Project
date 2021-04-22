const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");
const reminderController = require("./controller/reminder_controller");
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
app.use(passport.initialize());
app.use(passport.session());

// Routes start here
app.get("/reminders", ensureAuthenticated, reminderController.list);
app.use("/reminder", reminderRoute);
app.use("/auth", authRoute)

app.get("/weather", ensureAuthenticated, reminderController.getWeather);
app.get("/friends", ensureAuthenticated, reminderController.friends);

app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
