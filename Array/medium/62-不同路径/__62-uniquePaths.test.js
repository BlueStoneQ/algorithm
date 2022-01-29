const uniquePaths = require('./62-uniquePaths');

test('uniquePaths1', () => {
  const m = 3, n = 7;
  expect(uniquePaths(m, n)).toBe(28);
});