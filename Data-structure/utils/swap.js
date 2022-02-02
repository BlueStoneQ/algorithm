/**
 * 交换2个元素 - 数组中
 * @param {*} arr 要交换元素所在的数组
 * @param {*} index1 
 * @param {*} index2 
 */
const swapArr = function(arr, index1, index2) {
  if (!Array.isArray(arr)) return;
  if (index1 < 0 || index1 > arr.length - 1) throw new Error('index1 shouldn\'t exceed the border of Array');
  if (index2 < 0 || index2 > arr.length - 1) throw new Error('index2 shouldn\'t exceed the border of Array');

  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports = {
  swapArr
}