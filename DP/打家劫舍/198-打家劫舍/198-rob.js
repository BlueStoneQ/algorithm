/**
 * leet: https://leetcode-cn.com/problems/house-robber/
 * 2022-3-16
 * kaer: https://programmercarl.com/0198.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 求最值
 * dp经典问题：问题建模：将问题转换为dp问题：找出dp问题要素：



 DP五部曲：
 1. dp数组定义：dp[j] 代表下标 >= i的房屋内 可以偷窃到的最大金额为dp[i]
 2. dp状态转移公式：
 决定状态转移的因素就是第i间房 偷 还是 不偷：
 // 注意 偷i的话 则不能偷i-1（连续被偷 会报警） 就是考虑 i-2, 不偷，则考虑i-1
 dp[i] = max(dp[i-2] + nums[i], dp[i-1])
 3. 初始化dp
 从状态转移公式 可以 递推的基础：dp[0] 和 dp[1]
 dp[0] = nums[0]
 dp[1] = max(nums[0], nums[1])
 4. 遍历顺序
 根据公式 i是i+1和i+2递推出来的 所以 正向遍历
 5. 举例推导dp数组

 复杂度：
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  // defend
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0]; // 只能偷一家 则最大值 就是这一家
  // init data
  const numsLen = nums.length;
  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  // algo
  for (let i = 2; i < numsLen; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // return
  return dp[numsLen - 1];
};