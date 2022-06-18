/**
 * leet: https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * 2022-3-10
 * kaer: https://programmercarl.com/0746.%E4%BD%BF%E7%94%A8%E6%9C%80%E5%B0%8F%E8%8A%B1%E8%B4%B9%E7%88%AC%E6%A5%BC%E6%A2%AF.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * DP
 * dp[i]定义：爬到第i层台阶需要的最小花费
 * 状态转移公式：dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]; 这里认为第一步一定要花费
 * dp数组初始化：dp[0] = cost[0]; dp[0] = cost[1];
 * 遍历顺序-根据转移公式确定：前 -> 后
 * 距离dp数组：dp(5) = [1, 100, 2, 3, 3]
 * 
 * 这里按照官方的题解为准：比较能解释等通：
 * https://leetcode.cn/problems/min-cost-climbing-stairs/solution/shi-yong-zui-xiao-hua-fei-pa-lou-ti-by-l-ncf8/
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  // defend
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  // init data
  const n = cost.length;
  const dp = [];
  // 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。 - 因为我们要求最小的 所以 选择从1开始爬
  dp[0] = 0; 
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
      // 因为每次可以爬1-2 所以 有2种方案爬到当前i
      dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
};