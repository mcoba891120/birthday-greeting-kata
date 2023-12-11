const {messageGenerator,messageGeneratorV2} = require('../utils/message_generator');
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