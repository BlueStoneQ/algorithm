const maxSubArray = require('./53-maxSubArray');

test('maxSubArray', () => {
  const nums = [-2,1,-3,4,-1,2,1,-5,4];
  expect(maxSubArray(nums)).toBe(6);
});