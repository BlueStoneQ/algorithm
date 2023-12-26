/**
 * leet: https://leetcode-cn.com/problems/maximum-subarray/
 * 2022-3-22
 * kaer: https://programmercarl.com/0053.%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**

* 方法1: dp

 DP五部曲：
 1. 定义dp数组
dp[i]: 以i为结尾的子数组的最大和为dp[i]
 2. 状态转移方程
dp[i]只有两个方向可以推出来：
dp[i - 1] + nums[i]，即：nums[i]加入当前连续子序列和
nums[i]，即：从当前nums[i]开始一段新的序列（主要存在于之前的和小于当前nums[i]的情况，因为序列中有负数，所以不是相加一定变大）
一定是取最大的，所以dp[i] = max(dp[i - 1] + nums[i], nums[i]);
 3. 初始化dp数组
 - base case:
    - dp[0] = nums[0] // 最大和 不一定是正整数 只要是最大即可
 4. 遍历方向
 小 -> 大
 5. 举例推导dp

 复杂度：

 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  // defend
  const numsLen = nums.length;

  if (numsLen === 0) return 0;

  // init data
  
  const dp = new Array(numsLen).fill(0);
  dp[0] = nums[0]; // 最大和 不一定是正整数 只要是最大即可

  let maxSum = dp[0];
  // algo [!!!]startIndex = 1
  for (let i = 1; i < numsLen; i++) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
      // 更新下最长子数组的元素累加和
      if (dp[i] > maxSum) maxSum = dp[i];
  }

  // return 
  return maxSum;
};



/******************************************* 方法2：扫描法 *********************************************************************************** */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let curSum = nums[0];
  let maxSum = curSum;
  for (let i = 1; i < nums.length; i++) {
      if (curSum < 0) {
          curSum = nums[i];
      } else {
          curSum += nums[i];
      }

      if (maxSum < curSum) {
          maxSum = curSum;
      }
  }

  return maxSum;
};

