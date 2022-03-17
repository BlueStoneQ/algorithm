/**
 * leet: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * 2022-3-17
 * kaer: https://programmercarl.com/0123.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIII.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 关键在于至多买卖两次，这意味着可以买卖一次，可以买卖两次，也可以不买卖。 
 无论题目中是否允许「在同一天买入并且卖出」这一操作，最终的答案都不会受到影响，这是因为这一操作带来的收益为零。
   
   dp五部曲：
   1. dp数组定义
   概念：dp[i][1]，表示的是第i天，买入股票的状态，并不是说一定要第i天买入股票，这是很多同学容易陷入的误区。
   一天一共5个状态：这5个状态 有地推关系： 0 -> 4
        0. 无操作
        1. 第一次买入
        2. 第一次卖出
        3. 第二次买入
        4. 第二次卖出

    dp[i][j]
        - i 表示第i天
        - j为[0, 4] 5个状态
        - dp[i][j] 表示第i天状态j所剩的最大现金
   2. dp状态转移方程：状态机：一个状态 一般由 上一个状态转换成
    - dp[i][0] = dp[i - 1][0]; // 同一状态 没有改变 则从前一天继承
    - dp[i][1] = max(买入股票(第一次买入 则之前必然是无操作的情况)，没有操作（则沿用前一天第一次买入的状态）)
               = max(dp[i - 1][0] - prices[i], dp[i - 1][1])
    - dp[i][2] = max(在第一次买入的基础上卖出股票, 无操作-集成前一天第一次卖出的状态)
               = max(dp[i - 1][1] + prices[i], dp[i - 1][2])
    - dp[i][3] = max(在第一次卖出状态的基础上买入, 无操作-继承前一天同一状态的值)
               = max(dp[i - 1][2] - prices[i], dp[i - 1][3]);
    - dp[i][4] = max(在第二次买入的状态上卖出，无操作-继承前一天同一状态的值)
               = max(dp[i - 1][3] + prices[i], dp[i - 1][4])
   3. 初始化dp
   从公式可以得知我们需要推导出：
   dp[0][0] = 0
   dp[0][1] = -pirces[0]
   dp[0][2] = 0 // 第一天 接下来这些操作 都是无意义的
   dp[0][3] = -prices[0] // 第二次买入依赖于第一次卖出的状态，其实相当于第0天第一次买入了，第一次卖出了，然后在买入一次（第二次买入），那么现在手头上没有现金，只要买入，现金就做相应的减少。
   dp[0][4] = 0

   因为求最大值 所有值初始化为0
   4. 遍历顺序

   i - 1 => i
   5. 举例推导dp数组

   复杂度：
   时间复杂度：$O(n)$
   空间复杂度：$O(n × 5)$

   @param {number[]} prices
 * @return {number}
 */
   var maxProfit = function(prices) {
    // defend
    // init data
    const pricesLen = prices.length;
    // 这里5 是5个状态
    const dp = new Array(pricesLen).fill(0).map(() => new Array(5).fill(0));
    dp[0][1] =  -prices[0];
    dp[0][3] =  -prices[0];

    // algo 注意：下标从1开始哦 i = 0已经作为初始条件 初始化了
    for (let i = 1; i < pricesLen; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
        dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);
        dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3]);
        dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4]);
    }

    // return
    return dp[pricesLen - 1][4];
};