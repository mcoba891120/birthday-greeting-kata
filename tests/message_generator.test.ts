const messageGenerator = require('../utils/message_generator');
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