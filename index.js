const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const reminderRoute = require("./routes/reminderRoute")


app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);



app.set("view engine", "ejs");

// Routes start here

app.get("/reminders", reminderController.list);
app.use("/reminder", reminderRoute);

// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit);

app.get("/weather", reminderController.getWeather);

app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
