/**
 * leetcode: https://leetcode-cn.com/problems/maximum-subarray/
 * labuladong题解: https://labuladong.gitee.io/algo/3/24/81/
 * Date: 2022-1-28
 * 一维动态规划
 * 1. 暴力解法
 * 2. 优化：备忘录 或者 dp table
 */
/**
 * me: 一维动态规划方法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 防御
  if (!Array.isArray(nums)) return;
  if (nums.length <= 0) return;
  // 初始化值（构造数据结构）
  const len = nums.length;
  // 构造dp 数组: 下标 nums的下标; value: 以 nums[i] 为结尾的「最大子数组和」为 dp[i]
  const dp = [];
  // 核心算法
  // 遍历
  for (let i = 0;i < len;i++) {
    // base case
    if (i === 0) {
      dp[i] = nums[i];
      continue;
    }
    // 考虑:要求连续
    // 状态转移方程: 做选择：dp[i-1] + nums[i]（当前值） 和 nums[i] 选择一个大的作为dp[i]，
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
  }
  // 返回值（取dp中的最大值）
  return Math.max(...dp);
};

module.exports = maxSubArray;