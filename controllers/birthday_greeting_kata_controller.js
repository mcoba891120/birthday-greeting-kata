const getBirthdayGreetings = require("../models/birthday_greeting_kata_model");
const {
  messageGenerator,
  messageGeneratorV2,
  messageGeneratorV3,
} = require("../utils/message_generator");
const { validateDate } = require("../utils/date_validator");
const { currentDay, currentMonth } = require("../constants");

const birthdayGreetingCommon = async (req, res, next, messageGenerator) => {
  try {
    const month = req.query.month || currentMonth;
    const day = req.query.day || currentDay;
    if (!validateDate(month, day)) {
      return res.status(400).json({ message: "Input Date is invalid" });
    }
    const result = await getBirthdayGreetings(month, day);
    if (result.length === 0) {
      return res.status(404).json({ message: "NOT FOUND" });
    }
    const message = await messageGenerator(result);
    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
};

const birthdayGreeting = (req, res, next) => {
  return birthdayGreetingCommon(req, res, next, messageGenerator);
};

const birthdayGreeting_gender = (req, res, next) => {
  return birthdayGreetingCommon(req, res, next, messageGeneratorV2);
};

const birthdayGreeting_age = (req, res, next) => {
  return birthdayGreetingCommon(req, res, next, messageGeneratorV3);
};

module.exports = {
  birthdayGreeting,
  birthdayGreeting_gender,
  birthdayGreeting_age,
};
