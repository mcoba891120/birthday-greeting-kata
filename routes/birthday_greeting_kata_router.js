var express = require("express");
var router = express.Router();
const {
  birthdayGreeting,
  birthdayGreeting_gender,
  birthdayGreeting_age,
  birthdayGreeting_fullname,
} = require("../controllers/birthday_greeting_kata_controller");

router.get("/v1", birthdayGreeting);
router.get("/v2", birthdayGreeting_gender);
router.get("/v3", birthdayGreeting_age);
router.get("/v4", birthdayGreeting_fullname);

module.exports = router;
