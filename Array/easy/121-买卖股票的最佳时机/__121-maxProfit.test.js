const maxProfit = require('./121-maxProfit');

test('maxProfit-1', () => {
  const prices = [7,1,5,3,6,4];
  expect(maxProfit(prices)).toBe(5);
});