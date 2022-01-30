/**
 * leet: https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * Date: 2022-1-29
 * me: 
 * 方法1：暴力枚举 
 * 方法2：东哥：[前缀和数组-技巧](https://labuladong.gitee.io/algo/2/21/56/)
 */

/**
 * 方法：构造前缀和数组,暴力解法（该暴力解法在leet上超时）
 * 时间：O(n^2)
 * 空间：O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // 防御
  if (!Array.isArray(nums)) return;
  if (typeof k !== 'number') return;
  // 初始化值
  let resCount = 0;
  const len = nums.length;
  // 构造前缀和数组 前缀和数组还是要设计为比原数组大一圈： presum[i+1] = num[0]到nums[i]的距离；是因为能访问到边界
  const preSums = new Array(len+1).fill(0);
  for (let i = 1; i < len + 1; i++) {
    preSums[i] = preSums[i - 1] + nums[i - 1];
  }
  // 核心算法: 遍历前缀和数组 找到差值为k的数组 并计数
  for (let i = 1; i < len + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (preSums[i] - preSums[j] === k) resCount++;
    }
  }
  // 返回结果
  return resCount;
};

module.exports = subarraySum;