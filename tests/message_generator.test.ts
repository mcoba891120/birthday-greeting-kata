import mongoose from "mongoose";

const {messageGenerator,messageGeneratorV2,messageGeneratorV3,messageGeneratorV4} = require('../utils/message_generator');
const {Subject} = require('../constants');

test('messageGenerator should return correct messages', async () => {
  const result = [
    { first_name: 'John' },
  ];

  const expected = [
    { subject: Subject, message: 'Happy birthday, dear John!' },
  ];

  const actual = await messageGenerator(result);
  expect(actual).toEqual(expected);
});

test('messageGeneratorV2 should return correct messages and promotions', async () => {
  const result = [
    { first_name: 'John', gender: 'Male' },
    { first_name: 'Jane', gender: 'Female' },
  ];

  const expected = [
    { 
      subject: Subject, 
      message: 'Happy birthday, dear John!', 
      promotion_message: 'We offer special discount 20% off for the following items: White Wine, iPhone X' 
    },
    { 
      subject: Subject, 
      message: 'Happy birthday, dear Jane!', 
      promotion_message: 'We offer special discount 50% off for the following items: Cosmetic, LV Handbags' 
    },
  ];

  const actual = await messageGeneratorV2(result);
  expect(actual).toEqual(expected);
});

test('messageGeneratorV3 should return correct messages and promotions for elderly', async () => {
  const result = [
    { first_name: 'John', gender: 'Male', date_of_birth: '1956-06-01' },
    { first_name: 'Jane', gender: 'Female', date_of_birth: '1990-05-01' },
  ];

  const expected = [
    { 
      subject: Subject, 
      message: 'Happy birthday, dear John!', 
      greeting_picture: '(A greeting picture here)' 
    },
    { 
      subject: Subject, 
      message: 'Happy birthday, dear Jane!', 
      promotion_message: 'We offer special discount 50% off for the following items: Cosmetic, LV Handbags' 
    },
  ];

  const actual = await messageGeneratorV3(result);
  expect(actual).toEqual(expected);
});

test('messageGeneratorV4 should return correct messages', async () => {
  const result = [
    { first_name: 'John', last_name: 'Doe' },
    { first_name: 'Jane', last_name: 'Doe' },
  ];

  const expected = [
    { subject: Subject, message: 'Happy birthday, dear Doe, John!' },
    { subject: Subject, message: 'Happy birthday, dear Doe, Jane!' },
  ];

  const actual = await messageGeneratorV4(result);
  expect(actual).toEqual(expected);
});

afterAll(() => {
  mongoose.connection.close();
});