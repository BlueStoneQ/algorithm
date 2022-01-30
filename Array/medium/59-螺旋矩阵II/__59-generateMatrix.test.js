const generateMatrix = require('./59-generateMatrix');

test('generateMatrix-1', () => {
  const expectResult = [[1,2,3],[8,9,4],[7,6,5]];
  expect(generateMatrix(3)).toEqual(expectResult);
});