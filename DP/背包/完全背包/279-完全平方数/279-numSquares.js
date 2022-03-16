/**
 * leet: https://leetcode-cn.com/problems/perfect-squares/
 * 2022-3-16
 * kaer: https://programmercarl.com/0279.%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0.html#c-%E4%BB%A3%E7%A0%81
 */

/**
 * 每个数字可以使用不限次数 完全背包问题，物品数组为[1, ... ,n] target = n
 * 转换为背包：完全平方数就是物品（可以无限件使用），凑个正整数n就是背包，问凑满这个背包最少有多少物品？
 * 
 * DP五部曲：
 1. dp数组定义：dp[j]: 和为j的完全平方数的最少数量为dp[j]
 2. dp递推公式: dp[j] = min(dp[j], dp[j - i * i] + 1)
 3. dp初始化:
 dp[0] = 0; （题目中没有从0开始 而是从1开始 所以 0 * 0 不算, 在[1, n]中没有平方和为0的情况）
 求最小值 则初始值必须设置为最大值 
 4. 遍历顺序
 完全背包 顺序正序
 求最小数 则对组合 还是 排列不敏感 所以 内外双层都可以交换
 这里采用：外层物品 内层背包容量的嵌套
 5. 举例推导dp:

 * 复杂度：
 * 
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
  // defend
  // init data
  const dp = new Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  // algo
  for (let i = 0; i <= n; i++) {
      for (let j = i * i; j <= n; j++) {
          // j = i * i 其实也可以写在循环内 if (j >= i * i) 也就是当前背包容量能放下物品的质量i * i时 才会放入 
          dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
      }
  }

  // return
  return dp[n];
};