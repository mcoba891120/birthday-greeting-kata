var express = require("express");
var router = express.Router();
const birthdayGreeting = require("../controllers/birthday_greeting_kata_controller");

router.get("/v1", birthdayGreeting);

module.exports = router;
