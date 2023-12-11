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
    let promotion_message;
    if (row.gender === "Male") {
      promotion_message = Male_promotion_message;
    } else {
      promotion_message = Fefale_promotion_message;
    }
    return {
      subject: Subject,
      message: `Happy birthday, dear ${row.first_name}!`,
      promotion_message: promotion_message,
    };
  });
  return message;
};

const messageGeneratorV3 = async (result) => {
  let greeting_picture = "(A greeting picture here)";
  let promotion_message;
  const message = result.map((row) => {
    is_elderly = validateAge(row.date_of_birth);
    if (is_elderly) {
      return {
        subject: Subject,
        message: `Happy birthday, dear ${row.first_name}!`,
        greeting_picture: greeting_picture,
      };
    }
    if (row.gender === "Male") {
      promotion_message = Male_promotion_message;
    } else {
      promotion_message = Fefale_promotion_message;
    }
    return {
      subject: Subject,
      message: `Happy birthday, dear ${row.first_name}!`,
      promotion_message: promotion_message,
      greeting_picture: greeting_picture,
    };
  });
  return message;
};
module.exports = { messageGenerator, messageGeneratorV2, messageGeneratorV3 };
