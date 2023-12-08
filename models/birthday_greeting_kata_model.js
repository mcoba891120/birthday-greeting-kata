const { pool, create_connection, queryDatabase } = require("./db");

const getBirthdayGreetings = async (month, day) => {
  month = month.padStart(2, "0");
  day = day.padStart(2, "0");
  const today = `${month}-${day}`;
  try {
    const query = `
          SELECT * FROM member_records
          WHERE DATE_FORMAT(date_of_birth, '%m-%d') = ?
      `;
    const rows = await queryDatabase(query, [today]);
    return rows;
  } catch (err) {
    console.error("Error during database query:", err);
    throw err;
  }
};

module.exports = getBirthdayGreetings;
