/**
 * leetcode: https://leetcode-cn.com/problems/unique-paths/
 * Date: 2022-1-28
 * 题型：基本动态规划问题
 */

/**
 * 自顶向下：递归处理
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  // 防御 
  if (typeof n !== "number" || typeof m !== "number") return;
  // 初始化值
  // 备忘录-初始化
  const memo = [];
  for(let i = 0; i < m; i++) {
    memo[i] = [];
  }
  /**
   * 定义dp函数:
   * 不做备忘录 暴力解法 一般会超时
   * 时间：O(n), 递归次数n * 递归函数执行一次耗时O(1)
   * 空间：O(n), memo
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */
  const dp = function(x, y) {
    // base case
    if (x === 0 && y === 0) return 1; // 第一个格子不做统计 记作0种走法
    if (x < 0 || y < 0) return 0;
    // 查备忘录
    if (memo[x][y]) return memo[x][y];
    // 状态转移
    memo[x][y] = dp(x-1, y) + dp(x, y-1)
    return memo[x][y];
  }
  // 调用dp函数
  return dp(m - 1, n - 1);
 }

/**
 * [未完成]
 * 自底向上：构造dp数组
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(m, n) {
  // 防御
  // 初始化值
  const res = null;
  // dp数组定义(二维数组)：index: 目前所处的位置的x y坐标 value: 走到[x, y]共有多少种走法
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }
  // 核心算法
  // while(x < m || y < n) {
  //   // base case
  //   // 状态转移 (一个格子 只能从它的左边相邻格子[x-1][y] 和 右边相邻格子[x][y-1]走过来)
  //   dp[x][y] = dp[x-1][y] + dp[x][y-1];
  //   x++;
  //   y++;
  // }
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      console.log('{x, y}: ', { x, y });
      if (x === 0 && y === 0) {
        dp[0][0] = 0; // 第一个格子不做统计 记作0种走法
        continue;
      }
      if (x === 0 && y === 1) {
        dp[0][1] = 1; // [0, 1]格：只有一种走法
        continue;
      }
      if (x === 1 && y === 0) {
        dp[1][0] = 1; // 走到[1, 0]格：只有一种走法
        continue;
      }
      dp[x][y] = dp[x-1][y] + dp[x][y-1];
    }
  }
  console.log(dp);
  // 返回值 dp最后一格的值 就是 走到最后一格的可走的走法
  return dp[m-1][n-1];
};

module.exports = uniquePaths;