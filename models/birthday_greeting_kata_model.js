const { pool, create_connection } = require("./db");
const moment = require("moment");

const getBirthdayGreetings = async () => {
  console.log("Getting birthday greetings...");
  let today = moment().format("YYYY-MM-DD");
  today = "2023-08-08";
  const conn = await create_connection();
  try {
    const query = `
            SELECT * FROM member_records
            WHERE DATE_FORMAT(date_of_birth, '%m-%d') = DATE_FORMAT(?, '%m-%d')
        `;
    console.log("Querying database...");
    console.log("Today is:", today);
    const [rows] = await conn.query(query, [today]);
    console.log("Database query successful!");
    console.log("Rows returned:", rows);
    return rows;
  } catch (err) {
    console.error("Error during database query:", err);
    throw err;
  } finally {
    conn.release();
  }
};

module.exports = getBirthdayGreetings;
