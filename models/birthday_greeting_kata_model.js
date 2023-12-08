const { pool, create_connection, queryDatabase } = require("./db");
const moment = require("moment");

const getBirthdayGreetings = async () => {
  let today = moment().format("YYYY-MM-DD");
  today = "2023-08-08";
  try {
    const query = `
            SELECT * FROM member_records
            WHERE DATE_FORMAT(date_of_birth, '%m-%d') = DATE_FORMAT(?, '%m-%d')
        `;
    const rows = await queryDatabase(query, [today]);
    return rows;
  } catch (err) {
    console.error("Error during database query:", err);
    throw err;
  }
};

module.exports = getBirthdayGreetings;
