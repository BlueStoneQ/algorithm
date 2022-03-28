/**
 * leet: https://leetcode-cn.com/problems/monotone-increasing-digits/
 * 2022-3-28
 * kaer: https://programmercarl.com/0738.%E5%8D%95%E8%B0%83%E9%80%92%E5%A2%9E%E7%9A%84%E6%95%B0%E5%AD%97.html#%E6%9A%B4%E5%8A%9B%E8%A7%A3%E6%B3%95
 */

/**
 [√]方法1： 暴力  - 会超时，但是解法有助于练习编程模拟能力
 方法2： 贪心

 暴力尝试下：
 1. 从n倒序遍历 - 找出离n最近的一个单调递增的函数
 2. 判断当前数字是否为单调递增数字
 
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
  for (let i = n; i > 0; i--) {
      if (isIncreaseNum(i)) {
          return i;
      }
  }

  // 没有找到（中断-return）
  return 0;
};

/**
* 判断一个数字是否为单调递增
* @return {bool} true, num为单调递增
*/
function isIncreaseNum(num) {
  let max = 10; // 一个位上最大的值为max，这里记录的是上一位的 
  while (num) {
      // 当前位的数字
      const curBit = num % 10; 
      num = Math.floor(num / 10); // 向左退一位
      if (max >= curBit) {
          // 左一位数字大于当前数字 继续遍历直到最后一位
          max = curBit;
      } else {
          // 左一位的数字小于当前数字 不是单调递增
          return false;
      }
  }

  return true;
}