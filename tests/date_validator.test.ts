// /tests/date_validator.test.js
const {validateDate,validateAge} = require('../utils/date_validator');

test('validateDate should return true for valid dates', () => {
  expect(validateDate('01', '01')).toBe(true);
  expect(validateDate('12', '31')).toBe(true);
});

test('validateDate should return false for invalid dates', () => {
  expect(validateDate('02', '30')).toBe(false);
  expect(validateDate('04', '31')).toBe(false);
});

describe('validateAge', () => {
  it('should return true for elderly people', () => {
    const date_of_birth = '1956-06-01'; // This person would be 67 in 2023
    expect(validateAge(date_of_birth)).toBe(true);
  });

  it('should return false for non-elderly people', () => {
    const date_of_birth = '1990-05-01'; // This person would be 33 in 2023
    expect(validateAge(date_of_birth)).toBe(false);
  });
});