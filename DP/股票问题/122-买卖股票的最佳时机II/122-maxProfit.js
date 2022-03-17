/**
 * leet: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 2022-3-17
 * kaer: https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII%EF%BC%88%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%EF%BC%89.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 

 求最值 考虑下dp

 DP五部曲
 1. dp数组定义：
 dp[i][0]: 第i天持有股票所得的最大现金为dp[i][0]
 dp[i][1]: 第i天不持有股票所得的最大现金为dp[i][1]
 2. dp状态转移公式
 dp[i][0] = max(之前就持有，之前不持有而今天买入持有) // 注意：本题，因为一只股票可以买卖多次，所以当第i天买入股票的时候，所持有的现金可能有之前买卖过的利润。 
=》 dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i])

dp[i][1] = max(之前就不持有，之前持有今天卖出变为不持有)
         = max(dp[i - 1][1], dp[i - 1][0] - prices[i])
 3. 初始化dp
dp[0][0] = -prices[0]; // 第一天 如果要持有 就得买入 收入为-prices[0]
dp[0][1] = 0; // 第一天 不持有 则什么都不用做 获得现金为0
 4. 遍历方向
 i - 1 => i
 从小到大
 5. 举例推导状态转移方程

 复杂度
 
   @param {number[]} prices
 * @return {number}
 */
   var maxProfit = function(prices) {
    // defend
    // init data
    const pricesLen = prices.length;
    const dp = new Array(pricesLen).fill(0).map(() => [0, 0]);

    dp[0][0] = -prices[0]; 
    dp[0][1] = 0;

    // algo
    for (let i = 1; i < pricesLen; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]); // 不持有i
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]); // 持有i
    }

    // return
    return dp[pricesLen - 1][1];
};