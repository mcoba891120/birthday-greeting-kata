function validateDate(month, day) {
  const date = new Date(`2023-${month}-${day}`);
  return !isNaN(date);
}

module.exports = validateDate;
