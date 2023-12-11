const getBirthdayGreetings = require("../models/birthday_greeting_kata_model");
const {
  messageGenerator,
  messageGeneratorV2,
} = require("../utils/message_generator");
const validateDate = require("../utils/date_validator");
const { currentDay, currentMonth } = require("../constants");

const birthdayGreeting = async (req, res, next) => {
  try {
    month = req.query.month || currentMonth;
    day = req.query.day || currentDay;
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

const birthdayGreeting_gender = async (req, res, next) => {
  try {
    month = req.query.month || currentMonth;
    day = req.query.day || currentDay;
    if (!validateDate(month, day)) {
      return res.status(400).json({ message: "Input Date is invalid" });
    }
    const result = await getBirthdayGreetings(month, day);
    if (result.length === 0) {
      return res.status(404).json({ message: "NOT FOUND" });
    }
    const message = await messageGeneratorV2(result);
    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
};

module.exports = { birthdayGreeting, birthdayGreeting_gender };
