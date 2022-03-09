/**
 * leet: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 2022-3-9
 * kaer: https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 这道题本来是DP题 现在这里用贪心的解法解一下
 * 本质上是求最大正向的差值和
 * 贪心：局部最优：收集每天的正利润，全局最优：求得最大利润。
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  // defend
  if (prices.length <= 1) return 0;
  // init data
  let maxProfitVal = 0;
  // algo i从1开始 因为第一天 不能卖出 是没有利润的
  for (let i = 1; i < prices.length; i++) {
      // 只收集每天正向的利润
      maxProfitVal += Math.max(prices[i] - prices[i - 1], 0);
  }
  // return
  return maxProfitVal;
};