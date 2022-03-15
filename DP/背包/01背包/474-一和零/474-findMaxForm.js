/**
 * leet: https://leetcode-cn.com/problems/ones-and-zeroes/
 * 2022-3-15
 * kaer: https://programmercarl.com/0474.%E4%B8%80%E5%92%8C%E9%9B%B6.html#%E6%80%9D%E8%B7%AF
 */

/**
 * DP-01背包-二维背包
 * 
 * 问题建模：将该问题转换为01背包问题：
 * weight = strs = values, bagSize 有 m n 2个维度

 DP五部曲:
 1. dp数组定义
 dp[i][j] 代表 最多有i个0 j个1的strs的最大子集长度为dp[i][j]
 这里的i j代表 m n 2个维度
 2. dp地推公式
 dp[i][j] 可以由前一个strs里的字符串推导出来，strs里的字符串有zeroNum个0，oneNum个1。
 dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
 字符串的zeroNum和oneNum相当于物品的重量（weight[i]），字符串本身的个数相当于物品的价值（value[i]）。
 3. dp数组初始化
因为物品价值不会是负数，初始为0，保证递推的时候dp[i][j]不会被初始值覆盖。
 4. 遍历顺序
 参考0 1 背包的遍历顺序
 注意 这里背包是2个维度 
 5. 举例dp数组：

 复杂度分析：
 时间:
 空间:
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
  // defend
  // init data  
  // dp数组 是一个 m * n的二维数组, 每个元素初始化为0 一般正整数求max值 为了使max比较滚动起来 初始化为0
  // 由于数组的最大下标为length - 1, 则m = length - 1 => length = m + 1, n + 1同理
  const dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));
  // algo
  for (const str of strs) {
      // 从str中 统计 zeroNum 和 oneNum
      let zeroNum = 0, oneNum = 0;
      for (const char of str) {
          if (char === '0') {
              zeroNum++;
              continue;
          }

          oneNum++;
      }

      // 遍历背包2个维度 用当前这个物品 更新一遍背包
      for (let i = m; i >= zeroNum; i--) {
          for (let j = n; j >= oneNum; j--) {
              dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
          }
      }
  }

  // return
  return dp[m][n];
};