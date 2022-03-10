/**
 * leet: https://leetcode-cn.com/problems/unique-paths/
 * 2022-3-10
 * kaer: https://programmercarl.com/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
 */

/**
 * dp五部曲：
 * dp[i][j]定义：机器人从[0, 0]到达[m-1, n-1]共有多少条路径
 * 状态转移公式：dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 遍历的顺序：i j 都是从0 -> m  n 移动
 * dp的初始状态：dp[0][0] = 0; dp[0][1] = 1; dp[1][0] = 1;
 * 举例：dp(m = 2, n = 3) = [[0, 1], [1]]
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  // defend
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  // init data
  const dp = new Array(m).fill([]);
  // ！！！二维dp的初始化这里注意：需要循环初始化：如何初始化呢，首先dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理。
  for (let row = 0; row < m; row++) {
      dp[row][0] = 1;
  }
  for (let col = 0; col < n; col++) {
      dp[0][col] = 1;
  }

  // algo
  for (let row = 1; row < m; row++) {
      for (let col = 1; col < n; col++) {
          dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }      
  }
  // return
  return dp[m - 1][n - 1];
};