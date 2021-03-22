let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implement this code
    let reminderToEdit = req.params.id;
    let edit = {
      id: reminderToEdit.id,
      title: req.body.title,
      description: req.body.description,
      // This may not update the completed status yet
      completed: reminderToEdit.completed,
    }
    database.cindy.reminders[reminderToEdit.id-1] = edit;
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    // implement this code
    let reminderIndex = req.params.id;
    database.cindy.reminders.splice(reminderIndex.id-1)
    res.redirect("/reminders");
  },
};

module.exports = remindersController;
