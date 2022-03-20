/**
 * leet: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * 2022-3-20
 * karl: https://programmercarl.com/0714.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA%E5%90%AB%E6%89%8B%E7%BB%AD%E8%B4%B9%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html#%E6%80%9D%E8%B7%AF
 * me: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/comments/1452034
 */

/**

 DP五部曲：
1. 定义dp数组：
dp[i][j]: 第i天，状态为j，手里的最大现金为dp[i][j]
j的状态枚举：
    0- 不持有
    1- 持有

动作：买进buy 卖出sell 什么都不做rest
状态之间是通过动作来进行转换的

这里一笔交易是指： 买入卖出2个动作， 一笔交易扣一次手续费
在完成一笔交易的时候 扣除一笔手续费 也就是在卖出的时候

2. 状态转移方程
dp[i][0] = max([rest: 前一天就是不持有状态，今天什么都不做，继续保持不持有状态], [前一天是持有状态，今天卖出成为不持有状态])
         = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        
dp[i][1] = max([rest: 前一天就是持有状态，今天什么都不做，继续保持持有的状态], [前一天是不持有的状态，今天买入成为持有状态，完成一笔交易，注意手续费的消耗])
       = max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)

3. 初始化dp数组
从公式可以推导 我们需要的base case:
dp[0][0] = 0;
dp[0][1] = -prices[0]; // 持有状态 必须买入
其他非0下标 因为求真是整数
4. 遍历方向
i - 1 => i
5. 举例推导dp数组

 复杂度：
 
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
  // defend
  // init data
  const pricesLen = prices.length;
  const dp = new Array(pricesLen).fill(0).map(() => [0, 0]);
  dp[0][1] = -prices[0];

  // algo
  for (let i = 1; i < pricesLen; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  // return 最大利润的状态肯定是卖出了股票 不持有股票
  return dp[pricesLen - 1][0];
};