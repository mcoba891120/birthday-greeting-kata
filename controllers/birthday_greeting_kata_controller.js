const {
  getBirthdayGreetings,
  addBirthdayMemberMongodb,
  getBirthdayGreetings_mongodb,
} = require("../models/birthday_greeting_kata_model");
const {
  messageGenerator,
  messageGeneratorV2,
  messageGeneratorV3,
  messageGeneratorV4,
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
const birthdayGreeting_fullname = (req, res, next) => {
  return birthdayGreetingCommon(req, res, next, messageGeneratorV4);
};

const birthdayGreetingMemeberAdd_mongodb = (req, res, next) => {
  try {
    const member = req.body;
    console.log(member);
    addBirthdayMemberMongodb(member);
    res.status(200).json({ message: "OK" });
  } catch (err) {
    next(err);
  }
};

const birthdayGreetingMemeber_mongodb = async (req, res, next) => {
  try {
    const month = req.query.month || currentMonth;
    const day = req.query.day || currentDay;
    if (!validateDate(month, day)) {
      return res.status(400).json({ message: "Input Date is invalid" });
    }
    const result = await getBirthdayGreetings_mongodb(month, day);
    if (result.length === 0) {
      return res.status(404).json({ message: "NOT FOUND" });
    }
    const message = await messageGenerator(result);
    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  birthdayGreeting,
  birthdayGreeting_gender,
  birthdayGreeting_age,
  birthdayGreeting_fullname,
  birthdayGreetingMemeberAdd_mongodb,
  birthdayGreetingMemeber_mongodb,
};
