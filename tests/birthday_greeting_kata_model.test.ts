// /tests/birthday_greeting_kata_model.test.js
const getBirthdayGreetings = require('../models/birthday_greeting_kata_model');
const db = require('../models/db');

jest.mock('../models/db', () => ({
  queryDatabase: jest.fn(),
}));

test('getBirthdayGreetings should return correct data', async () => {
  const mockData = [
    { first_name: 'John' },
  ];
  db.queryDatabase.mockImplementation(() => Promise.resolve(mockData));

  const actual = await getBirthdayGreetings('01', '01');
  expect(actual).toEqual(mockData);
});