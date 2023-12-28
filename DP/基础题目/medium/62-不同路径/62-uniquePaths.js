/**
 * leet: https://leetcode-cn.com/problems/unique-paths/
 * 2022-3-10
 * kaer: https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html
 */

/**
 * dp五部曲：
 * 机器人从(0 , 0) 位置出发，到(m - 1, n - 1)终点。
 * dp[i][j]定义：机器人从[0, 0]到达[i-1, j-1]共有多少条路径
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
  // 初始化：第一列
  for (let row = 0; row < m; row++) {
      dp[row][0] = 1;
  }
  // 初始化：第一行
  for (let col = 0; col < n; col++) {
      dp[0][col] = 1;
  }

  // algo: 注意这里从1开始起步
  for (let row = 1; row < m; row++) {
      for (let col = 1; col < n; col++) {
          // 到达位置[row, col]可以从上 左 2个相邻的位置过来：每种过来的方法只有一种：
          dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }      
  }
  // return 机器人从(0 , 0) 位置出发，到(m - 1, n - 1)终点。
  return dp[m - 1][n - 1];
};