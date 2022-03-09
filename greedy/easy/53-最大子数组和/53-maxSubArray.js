/**
 * leet: https://leetcode-cn.com/problems/maximum-subarray/
 * 2022-3-9
 * kaer: https://programmercarl.com/0053.%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C.html#%E8%B4%AA%E5%BF%83%E8%A7%A3%E6%B3%95
 */

/**
 * 方法2： 贪心解法
 * 这道题应该也是蛮高频的
 局部最优：当前“连续和”为负数的时候立刻放弃，从下一个元素重新计算“连续和”，因为负数加上下一个元素 “连续和”只会越来越小。
全局最优：选取最大“连续和”
局部最优的情况下，并记录最大的“连续和”，可以推出全局最优。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // defend
  // init data
  let maxSum = -Infinity; // 初始值必须初始化为最小负数, 因为nums如果存在全部元素为负数的情况 那么maxSumn能够在第一次MAX比较中 让nums中的子序列和赋值给maxSum 保证程序的进行 否则一直就是maxSum的初始值
  let sum = 0;
  // algo
  for (let i = 0; i < nums.length; i++) {
      if (sum < 0) {
          // 如果是负的sum话 继续加下去 知会让后面接上来的序列变小 则重新设置sum
          sum = nums[i];
      } else {
          // 正的sum 就继续加上当前值
          sum = sum + nums[i];
      }
      // 更新最大值
      maxSum = Math.max(sum, maxSum);
  }
  // return
  return maxSum;
};