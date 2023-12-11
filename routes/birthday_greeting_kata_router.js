var express = require("express");
var router = express.Router();
const {
  birthdayGreeting,
  birthdayGreeting_gender,
} = require("../controllers/birthday_greeting_kata_controller");

router.get("/v1", birthdayGreeting);
router.get("/v2", birthdayGreeting_gender);

module.exports = router;
