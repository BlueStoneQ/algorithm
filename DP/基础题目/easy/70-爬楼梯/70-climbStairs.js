/**
 * leet: https://leetcode-cn.com/problems/climbing-stairs/
 * 2022-3-9
 * kaer: https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF.html#%E6%80%9D%E8%B7%AF
 */

/**
 * DP
 * dp分析五部曲：
 * dp数组定义 dp[i]: 爬到第i层台阶 有dp[i]种爬法
 * 状态转移方程-用之前的状态推导出当前状态：dp[i] = dp[i- 1]+ dp[i - 2]
    // 分析：首先是dp[i - 1]，上i-1层楼梯，有dp[i - 1]种方法，那么再一步跳一个台阶不就是dp[i]了
    // dp[i - 2]，上i-2层楼梯，有dp[i - 2]种方法，那么再一步跳两个台阶不就是dp[i]了(跳一步就到i-1了 上面已经统计了)
 * dp数组初始化：dp[1] = 1, dp[2] = 2 , i直接起始值：3 （第0阶毫无参与计算的意义）
 * 遍历顺序：从dp公式可以得：i需要由之前的状态推导出， 所以方向 i递增
 * 举例推导DP数据：n = 5 dp = [0, 1, 2, 3, 5, 8]
 * @param {number} n
 * @return {number}
 */
    var climbStairs = function(n) {
      // defend
      if (n <= 2) return n;
      // init data dp[0] 其实是毫无意义的 
      const dp = [];
      dp[1] = 1;
      dp[2] = 2;
      // algo
      for (let i = 3; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
      }
      // return
      return dp[n];
  };