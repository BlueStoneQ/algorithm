/**
 * 2021-5-22
 * 两数和的下标
 * 寻找数组nums中2个元素之和为target， 返回这2个元素的下标
 */

/**
 * 算法1：
 * 双层循环
 * @param {*} arr 
 * @param {*} target 
 */
const findSumIndex1 = (arr, target) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 加数一定要小于target 否则跳过该循环
    if (arr[i] > target) continue;
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

(() => {
  const input1 = [0, 2, 1, 3, 4, 5];
  const target1 = 5;
  // expect [ 1, 3 ]
  console.log('expect findSumIndex1([0, 2, 1, 3, 4, 5], 5): ', findSumIndex1(input1, target1));
})()