/**
 * leet: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 2022-3-17
 * kaer: https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 优化版解法：DP: 股票买卖问题-滚动数组压缩空间复杂度
 
 题目分析：求最值 尝试考虑DP

 DP五部曲：
 1. 定义dp数组：
    - dp[i][0] = 在第i天持有股票所得最多的现金为dp[i][0]
    - dp[i][1] = 在第i天不持有股票所得最多的现金为dp[i][1]
 2. dp递推公式
 求最值 一般用max比较 
 - dp[i][0] = max(昨天就持有, 今天买入持有)
            = max(dp[i - 1][0], -prices[i])
 - dp[i][1] = max(昨天就不持有，今天卖出)
            = max(dp[i - 1][1], dp[i - 1][0] + prices[i])
 3. 初始化dp
又公式可知：需要的base值：
dp[0][0] = -prices[0] // 第一天持有 只有买入一个动作可选择
dp[0][1] = 0 // 第一天不持有 就什么都不做 
其他下标，因为max比较 则取最小正整数 0
 4. 遍历顺序
根据公式 i-1到i 从前向后遍历

结果：dp[prices.length - 1][1]  // 卖出永远比持有在手上获得利润高
 5. 举例推导dp数组

 复杂度：

 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  // defend
  // init data
  const pricesLen = prices.length;
  const dp = new Array(2).fill(0).map(() => [0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;

  // algo
  for (let i = 1; i < pricesLen; i++) {
      // 这里利用 滚动数组(奇偶坐标交替记录) 的方式 将空间复杂度从O(pricesLen)降低到O(1)
      dp[i % 2][0] = Math.max(dp[(i - 1) % 2][0], -prices[i]);
      dp[i % 2][1] = Math.max(dp[(i - 1) % 2][1], dp[(i - 1) % 2][0] + prices[i]);
  }

  // return 
  return dp[(pricesLen - 1) % 2][1];
};