/**
 * 2021-5-26
 * 翻转字符串（数组）
 * 1. js中array有reversal,这里我们手写一个reversal
 * 2. 额外空间O(1), 原地翻转
 */

/**
 * 算法1：[up]试一试双指针（第二指针 = f(第一指针)）
 * @param {*} strArray 
 */
const reversalStr1 = (strArray) => {
  // TODO: 防御
  const swap = (i, j) => {
    const temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
  }
  for (let i = 0; i < Math.floor(strArray.length/2); i++) {
    // 交换对称出的一个
    swap(i, strArray.length-1-i);
  }
}

(() => {
  const input1 = ['a', 'b', 'c', 'd', 'e'];
  reversalStr1(input1);
  console.log(`expect reversalStr1(['a', 'b', 'c', 'd']): ${input1}`);
})()

module.exports = {
  reversalStr1
}
