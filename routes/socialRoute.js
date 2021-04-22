const express = require("express");
const socialController = require("../controller/social_controller");
const { ensureAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/friends", ensureAuthenticated, socialController.showFriends);
router.post("/friends", ensureAuthenticated, socialController.addFriend);

module.exports = router;
