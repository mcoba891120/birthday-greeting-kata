// /tests/date_validator.test.js
const validateDate = require('../utils/date_validator');

test('validateDate should return true for valid dates', () => {
  expect(validateDate('01', '01')).toBe(true);
  expect(validateDate('12', '31')).toBe(true);
});

test('validateDate should return false for invalid dates', () => {
  expect(validateDate('02', '30')).toBe(false);
  expect(validateDate('04', '31')).toBe(false);
});