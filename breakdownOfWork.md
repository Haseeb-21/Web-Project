# Web-Project

## March 23rd (First Sprint Complete)

### Ivan Chen:
I worked on the following tasks:
- finished update function - This is responsible for updating reminders.
- finished delete function - This is responsible for deleting reminders.

### Haseeb Murtaza:
I worked on the following tasks:
- Made a version of the delete function - This task is responsible for deleting reminders.
- Debugging for the final versions of delete and update
- Attempted to implement local authentication, but it still needs work. I needed to rewatch the passport lab lecture and read the documentation.

### William Pham:
I worked on the following tasks:
- Tried the authentication
- Helped Haseeb on authentication by researching

## March 30 (week 2)

### Haseeb Murtaza:
I worked on the following tasks:
- Researched the different API's we can implement from different websites.

Ivan Chen:
I worked on the following tasks:
- Fixed a bug with id allocation when creating new reminders.

## Week 3

### Haseeb Murtaza:
- Made fixes to the local authentication index.js and auth_controller.js 

### Ivan Chen:
- Fixed bug where sometimes reminders id would become a string.
- Fixed bug where sometimes reminders with the same ID may be created

## Week 4

### Haseeb Murtaza: 
- Added a weather API to display current temperature, feels-like temperature and weather conditions. To implement this, I needed to rewatch the lecture on API's and search for a suitable API (visualcrossing).
- Updated index.html. Changed the testimonial pictures and the information about the app.
- Added a 3-day forecast to the weather page. Shows min/max temperature and the conditions of that day.
- Added in subtasks and reminder dates. They can be edited and added when creating a new reminder.
- Added the ability to add a tag for each reminder.

### Ivan Chen:
- Merged weather API into master branch.
- Changed file structure to use routes.
- Moved weather API out of reminders directory.
- Parsed through https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css to find suitable css for Create and Edit's submit buttons. Updated the buttons to the corresponding class (btn btn-outline-primary) .
- Rewatched 2h passport video.
- Rewrote local authentication using passport lab as a base. It actually works now.
- Added userController, middleware and userModel from passport lab.
- Managed to get authentication working, but did not link reminders yet.
- Implemented ensureAuthenticated to limit who can see reminders.
- Ensured users can now only see their own reminders.
- Moved database out of models/userModel.js and into database.js. Imported the database into userModel.
- Updated reminders ejs to display user's name.
- Added user creation functionality.
- Modified register EJS to indicate if trying to register with an email already in use.
- Added css from stackpath for the notification. Chose to add notification to class alert-warning.
- Modified login EJS to prompt user to retype credentials after successfully registering.
- Added css from stackpath for the notification. Chose to add notification to class alert-success.
- Modified index.html to make sign up button redirect to register page.
- Researched how to change the value of an attribute on ejs. Discovered variables are not interpreted as string literals so I was missing quotations (value="<%= var%>" instead of value=<%= var%>)
- Implemented GET method when pressing button to have what the user typed on index.html appear as on the register page.
