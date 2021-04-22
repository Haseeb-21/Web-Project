//let database = require("../database");
const fetch = require("node-fetch");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: req.user.reminders, user: req.user.email.split("@")[0] });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: req.user.reminders });
    }
  },

  create: (req, res) => {
    let idNum = Number(1)
    if (req.user.reminders.length != 0){
      idNum = Number(req.user.reminders[req.user.reminders.length -1].id +1);
    }
    let reminder = {
      id: idNum,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      subtask: req.body.subtask,
      tag: req.body.tag,
      completed: false,
    };
    req.user.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implement this code
    let reminderToEdit = Number(req.params.id);
    let completion = (req.body.completed == "true")
    for (let i=0; i < req.user.reminders.length; i++){
      if (req.user.reminders[i].id == reminderToEdit) {
        req.user.reminders[i].title = req.body.title;
        req.user.reminders[i].description = req.body.description;
        req.user.reminders[i].date = req.body.date;
        req.user.reminders[i].tag = req.body.tag;
        req.user.reminders[i].subtask = req.body.subtask;
        req.user.reminders[i].completed = completion;
      }
    }
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    // implement this code
    for (let i = 0; i < req.user.reminders.length; i++) {
      if (req.user.reminders[i].id == req.params.id){
        req.user.reminders.splice(i, 1)
      }
    } 
    res.redirect("/reminders");
  },
  getWeather: async (req, res) => {
    const fetchResponse = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vancouver?unitGroup=metric&key=M5CCD8RWPZRGHP8DJAH4T9A2H")
    const data = await fetchResponse.json();
    res.render("weather/weather", {
      data
    })
  }
};

module.exports = remindersController;
