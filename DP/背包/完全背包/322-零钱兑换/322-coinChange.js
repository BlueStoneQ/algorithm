/**
 * leet: https://leetcode-cn.com/problems/coin-change/
 * 2022-3-16
 * kaer: https://programmercarl.com/0322.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 分析问题：求最值 + 每种硬币（物品）是无限的 =》 完全背包问题

 * DP五部曲：
 1. dp数组定义: dp[j] 等于凑够金额i的最小硬币数为dp[j]
 2. dp递推公式: dp[j] = min(dp[j - coins[i]] + 1, dp[j])
 凑足总额为j - coins[i]的最少个数为dp[j - coins[i]]，那么只需要加上一个钱币coins[i]即dp[j - coins[i]] + 1就是dp[j]（考虑coins[i]）
 3. dp初始化: 
 dp[0] = 0, 凑足0的钱币个数必然为0
 其他非0下标 为了启动min比较 必须设置最大数 MAX_INT这样的
 4. dp顺序
 完全背包问题，采用正序
 另外, 内外层使用物品或者背包容量 都可以，因为只求最小硬币数 不关乎排列和组合
 5. 举例推导dp

 * 复杂度：


 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  // defend
  // init data
  const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  // algo 这里采用外层物品 内层背包容量的遍历
  for (const coin of coins) {
      for (let j = coin; j <= amount; j++) {
          // 比较的是 组成j  不使用当前硬币 和 使用当前硬币的 硬币个数
          dp[j] = Math.min(dp[j], dp[j - coin] + 1);
      }
  }

  // return 
  // 注意无解的情况 就是dp还是原来的值
  if (dp[amount] === Number.MAX_VALUE) return -1;

  return dp[amount];
};