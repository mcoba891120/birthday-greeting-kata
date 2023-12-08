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

module.exports = messageGenerator;
