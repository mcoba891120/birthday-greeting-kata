const { elderyAge } = require("../constants");

function validateDate(month, day) {
  const date = new Date(`2023-${month}-${day}`);
  return date.getMonth() + 1 == month && date.getDate() == day;
}

function validateAge(date_of_birth) {
  const date = new Date(date_of_birth);
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  if (age < elderyAge) {
    return false;
  }
  return true;
}

module.exports = { validateDate, validateAge };
