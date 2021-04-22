const express = require("express");
const reminderController = require("../controller/reminder_controller");
const { ensureAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/new", ensureAuthenticated, reminderController.new);
router.get("/:id", ensureAuthenticated, reminderController.listOne);
router.get("/:id/edit", ensureAuthenticated, reminderController.edit);
router.post("/", ensureAuthenticated, reminderController.create);

// Implement this yourself
router.post("/update/:id", ensureAuthenticated, reminderController.update);

// Implement this yourself
router.post("/delete/:id", ensureAuthenticated, reminderController.delete);

module.exports = router;