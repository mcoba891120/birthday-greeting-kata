var express = require("express");
var router = express.Router();
const {
  birthdayGreeting,
  birthdayGreeting_gender,
  birthdayGreeting_age,
  birthdayGreeting_fullname,
  birthdayGreetingMemeberAdd_mongodb,
  birthdayGreetingMemeberFind_mongodb,
  birthdayGreetingMemeber_mongodb,
} = require("../controllers/birthday_greeting_kata_controller");

router.get("/v1", birthdayGreeting);
router.get("/v2", birthdayGreeting_gender);
router.get("/v3", birthdayGreeting_age);
router.get("/v4", birthdayGreeting_fullname);
router.get("/v5", birthdayGreetingMemeber_mongodb);
router.get("/find", birthdayGreetingMemeberFind_mongodb);
router.post("/add", birthdayGreetingMemeberAdd_mongodb);

module.exports = router;
