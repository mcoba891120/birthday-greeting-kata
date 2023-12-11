const { Subject } = require("../constants");

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
      promotion_message =
        "We offer special discount 20% off for the following items: White Wine, iPhone X";
    } else {
      promotion_message =
        "We offer special discount 50% off for the following items: Cosmetic, LV Handbags";
    }
    return {
      subject: Subject,
      message: `Happy birthday, dear ${row.first_name}!`,
      promotion_message: promotion_message,
    };
  });
  return message;
};
module.exports = { messageGenerator, messageGeneratorV2 };
