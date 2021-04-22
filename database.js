const Database = [
  {
    id: 1,
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
	friends: [],
	reminders: [{id: 1, title: "jimmy", description: "abcabc", subtask: "Eat food", date: "April 4, 2021", tag: "school", completed: false}],
  },
  {
    id: 2,
    email: "johnny123@gmail.com",
    password: "johnny123!",
	friends: [],
	reminders: [{id: 1, title: "johnny", description: "abcabc", subtask: "Eat food", date: "April 4, 2021", tag: "school", completed: false}],
  },
  {
    id: 3,
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
	friends: [],
	reminders: [{id: 1, title: "jonathan", description: "abcabc", subtask: "Eat food", date: "April 4, 2021", tag: "school", completed: false}],
  },
  {
    id: 4,
    email: "123@gmail.com",
    password: "123",
	friends: ["Friend A", "Friend B", "These should be emails"],
    reminders: [{id: 1, title: "abc", description: "abcabc", subtask: "Eat food", date: "April 4, 2021", tag: "school", completed: false}],
  },	
];

module.exports = Database;