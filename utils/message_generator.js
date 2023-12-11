const {
  Subject,
  Male_promotion_message,
  Fefale_promotion_message,
} = require("../constants");
const { validateAge } = require("./date_validator");

const messageGenerator = async (result) => {
  const message = result.map((row) => {
    return {
      subject: Subject,
      message: `Happy birthday, dear ${row.first_name}!`,
    };
  });
  return message;
};

const messageGeneratorV2 = async (result) => {
  const message = result.map((row) => {
    return {
      subject: Subject,
      message: `Happy birthday, dear ${row.first_name}!`,
      romotion_message:
        row.gender === "Male"
          ? Male_promotion_message
          : Fefale_promotion_message,
    };
  });
  return message;
};

const messageGeneratorV3 = async (result) => {
  const greeting_picture = "(A greeting picture here)";

  return result.map((row) => {
    const is_elderly = validateAge(row.date_of_birth);

    if (is_elderly) {
      return {
        subject: Subject,
        message: `Happy birthday, dear ${row.first_name}!`,
        greeting_picture,
      };
    }

    return {
      subject: Subject,
      message: `Happy birthday, dear ${row.first_name}!`,
      promotion_message:
        row.gender === "Male"
          ? Male_promotion_message
          : Fefale_promotion_message,
    };
  });
};
module.exports = { messageGenerator, messageGeneratorV2, messageGeneratorV3 };
