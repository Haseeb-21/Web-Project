const express = require("express");
const reminderController = require("../controller/reminder_controller");
const router = express.Router();


router.get("/new", reminderController.new);
router.get("/:id", reminderController.listOne);
router.get("/:id/edit", reminderController.edit);
router.post("/", reminderController.create);

// Implement this yourself
router.post("/update/:id", reminderController.update);

// Implement this yourself
router.post("/delete/:id", reminderController.delete);

module.exports = router;