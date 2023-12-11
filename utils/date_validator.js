function validateDate(month, day) {
  const date = new Date(`2023-${month}-${day}`);
  return date.getMonth() + 1 == month && date.getDate() == day;
}

module.exports = validateDate;
