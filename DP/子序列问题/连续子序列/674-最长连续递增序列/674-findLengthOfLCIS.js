/**
 * leet: https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 * 2022-3-21
 * kaer: https://programmercarl.com/0674.%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E9%80%92%E5%A2%9E%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 
 
 DP五部曲：
 1. dp数组定义:
 dp[i]: 元素i(包括i)之前的最长连续递增子序列长度为dp[i]
 2. dp状态转移方程
 if (nums[i] > nums[i - 1]) {
     dp[i] = dp[i - 1] + 1; // 如果是连续的话 将当前元素nums[i]记入当前连续序列 长度+1；不连续的话 直接从初始值dp[i] = 1 开始重新计算 不断更新一个计数值 记录最大的长度
 }
 3. dp初始化
 以nums[i]为结尾的最长连续递增子序列长度至少为1 就是nums[i]本身
 所以 dp[i] = 1
 4. 遍历方向
 i 从 小 到 大
 5. 举例推导dp

 复杂度：
 
 @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
  // defend
  const numsLen = nums.length;
  if (numsLen <= 1) return numsLen;
  // init data
  let maxLen = 1; // 因为i直接是从1开始计数的 所以 这里初始值必须计算了nums[0]
  
  const dp = new Array(numsLen).fill(1);
  // algo
  for (let i = 1; i < numsLen; i++) {
      if (nums[i] > nums[i - 1]) {
          dp[i] = dp[i - 1] + 1;
      }
      // 更新最大的序列长度
      if (dp[i] > maxLen) maxLen = dp[i];
  }

  // return 
  return maxLen;
};