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

/**
 * 东哥的题解：觉得写得更好 更推荐
 * 以下为我理解后 自己动手写出来的
 * https://labuladong.gitee.io/algo/3/24/81/
 * @param {*} nums 
 */
const maxSubArray2 = function(nums) {
  // 防御
  if (!Array.isArray(nums)) return;
  if (nums.length <= 0) return;
  // 初始化值
  const len = nums.length;
  const dp = [];
  dp[0] = nums[0];
  // 核心算法 1. 定义 并 构造 dp数组：记录状态映射关系
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  // 返回值
  return Math.max(...dp);
}

/**
 * 加入了状态压缩, 降低了空间复杂度: O(n) => O(1)
 * 东哥的题解：觉得写得更好 更推荐
 * 以下为我理解后 自己动手写出来的
 * https://labuladong.gitee.io/algo/3/24/81/
 * @param {*} nums 
 */
 const maxSubArray3 = function(nums) {
  // 防御
  if (!Array.isArray(nums)) return;
  if (nums.length <= 0) return;
  // 初始化值
  const len = nums.length;
  // 状态压缩：使用dp1 dp0 代替之前的dp[]
  let dp0 = nums[0];
  let dp1 = dp0;
  let res = dp0;
  // 核心算法 1. 定义 并 构造 dp数组：记录状态映射关系
  for (let i = 1; i < len; i++) {
    dp1 = Math.max(dp0 + nums[i], nums[i]);
    // 更新dp0参与下一轮
    dp0 = dp1;
    // 更新返回值
    res = Math.max(res, dp1);
  }
  // 返回值
  return res;
}


module.exports = maxSubArray3;