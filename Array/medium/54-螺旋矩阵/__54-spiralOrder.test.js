const spiralOrder = require('./54-spiralOrder');

test('spiralOrder-1', () => {
  const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
  const expectResult = [1,2,3,4,8,12,11,10,9,5,6,7];
  expect(spiralOrder(matrix)).toEqual(expectResult);
});