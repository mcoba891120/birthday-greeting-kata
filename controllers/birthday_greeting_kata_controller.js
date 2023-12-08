const getBirthdayGreetings = require("../models/birthday_greeting_kata_model");
const messageGenerator = require("../utils/message_generator");

const birthdayGreeting = async (req, res, next) => {
  try {
    const result = await getBirthdayGreetings();
    const message = await messageGenerator(result);
    res.status(200).json(message);
    console.log(message);
  } catch (err) {
    next(err);
  }
};

module.exports = birthdayGreeting;
