/**
 * leet: https://leetcode-cn.com/problems/coin-change-2/
 * 2022-3-16
 * kaer: https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 将问题转化为完全背包问题

 * DP五部曲：
1. 定义dp数组: dp[j] 表示 凑成金额j的组合数为dp[j]
2. 确定递推公式：组合的计算 都是 累加的 dp[j] += dp[j -coins[i]]
3. 初始化dp数组：dp[0] = 1, 下标非0 初始化为0 累加时 不会影响真正的dp[j]
4. 确定遍历顺序：

5. 举例推导dp数组：
    - 打印下 看下每次遍历的痕迹 感受下遍历的顺序的影响：

 * 复杂度：
时间：O(coins.length * amount) 双层循环
空间：O(amount) dp数组的容量

 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  // defend
  // init data
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  // algo
  for (const coin of coins) {
      for (let j = coin; j <= amount; j++) {
          dp[j] += dp[j - coin];
      }
  }

  // return
  return dp[amount];
};