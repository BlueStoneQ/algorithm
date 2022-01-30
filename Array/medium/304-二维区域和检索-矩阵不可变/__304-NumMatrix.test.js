const NumMatrix = require('./304-NumMatrix');

test('NumMatrix-1', () => {
  const inputMatrix = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]];
  const sumRegion = [2,1,4,3];
  const numMatrix = new NumMatrix(inputMatrix);
  expect(numMatrix.sumRegion(...sumRegion)).toBe(8);
});