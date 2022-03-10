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
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  // defend
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  // init data
  const costLen = cost.length;
  const dp = [];
  dp[0] = cost[0];
  dp[1] = cost[1];
  // algo
  for (let i = 2; i < costLen; i++) {
      dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  // return 取到达倒数第一步 倒数第二部花费的最小值（因为一次可以跳1步 或者 2步）这里注意cost的定义 是从台阶向上爬1-2步所需要的花费 所以达到的最后一步的花费
  // kaer: 这道题描述也确实有点魔幻。题目描述为：每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。从题目描述可以看出：要不是第一步不需要花费体力，要不就是第最后一步不需要花费体力，我个人理解：题意说的其实是第一步是要支付费用的！。因为是当你爬上一个台阶就要花费对应的体力值！所以我定义的dp[i]意思是也是第一步是要花费体力的，最后一步不用花费体力了，因为已经支付了。
  return Math.min(dp[costLen - 1], dp[costLen - 2]);
};