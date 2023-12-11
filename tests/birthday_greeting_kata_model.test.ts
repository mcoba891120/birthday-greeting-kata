import mongoose from "mongoose";
const mockSave = jest.fn();
const mockFind = jest.fn();
jest.mock('../models/mongodb', () => {
  function Member(data) {
    this.data = data;
    this.save = mockSave;
  }

  Member.find = mockFind;

  return Member;
});

const { getBirthdayGreetings, addBirthdayMemberMongodb, getBirthdayGreetings_mongodb } = require('../models/birthday_greeting_kata_model');
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


test('addBirthdayMemberMongodb should save member to database', async () => {
  const member = {
    name: 'Test',
    date_of_birth: '1990-01-01',
    email: 'test@example.com',
  };

  await addBirthdayMemberMongodb(member);

  expect(mockSave).toHaveBeenCalled();
});

test('getBirthdayGreetings_mongodb should return members with birthday on specific date', async () => {
  const members = [
    { name: 'Test1', date_of_birth: '1990-01-01', email: 'test1@example.com' },
    { name: 'Test2', date_of_birth: '1990-01-02', email: 'test2@example.com' },
  ];

  mockFind.mockImplementation(() => Promise.resolve(members));

  const birthdayMembers = await getBirthdayGreetings_mongodb('01', '01');

  expect(birthdayMembers).toEqual(members);
});

afterAll(() => {
  mongoose.connection.close();
});
