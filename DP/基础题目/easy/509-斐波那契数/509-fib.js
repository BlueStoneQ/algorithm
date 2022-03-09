/**
 * leet: https://leetcode-cn.com/problems/fibonacci-number/
 * 2022-3-9
 * kaer: https://programmercarl.com/0509.%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0.html#%E6%80%9D%E8%B7%AF
 */

/**
 * DP法
 * dp数组定义描述：dp[i]代表第i个数的斐波那契数值
 * 状态转移方程：dp(i) = dp(i - 1) + dp(i - 2)
 * dp数组初始化：dp[0] = 0 dp[1] = 1
 * dp数组举例：
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  // defend
  if (n <= 1) return n;
  // init data
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  // algo
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1]+ dp[i - 2];
  }
  // return 
  return dp[n];
};