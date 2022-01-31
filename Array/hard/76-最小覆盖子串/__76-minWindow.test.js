const minWindow = require('./76-minWindow');

test('minWindow-1', () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
});

test('minWindow-2', () => {
  expect(minWindow("ab", "a")).toBe("a");
});