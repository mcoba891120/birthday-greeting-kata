const { queryDatabase } = require("./db");
const Member = require("./mongodb");
const moment = require("moment-timezone");

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

const addBirthdayMemberMongodb = async (member) => {
  try {
    member.date_of_birth = moment
      .tz(member.date_of_birth, "Asia/Taipei")
      .toDate();
    const newMember = new Member(member);
    await newMember.save();
  } catch (err) {
    console.error("Error during database query:", err);
    throw err;
  }
};

const getBirthdayGreetings_mongodb = async (month, day) => {
  month = month.padStart(2, "0");
  day = day.padStart(2, "0");
  const today = `${month}-${day}`;

  try {
    const members = await Member.find({
      $expr: {
        $eq: [
          { $dateToString: { format: "%m-%d", date: "$date_of_birth" } },
          today,
        ],
      },
    });

    return members;
  } catch (err) {
    console.error("Error during database query:", err);
    throw err;
  }
};
module.exports = {
  getBirthdayGreetings,
  addBirthdayMemberMongodb,
  getBirthdayGreetings_mongodb,
};
