/**
 * 
 * leetCode: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * Date: 2022-1-29
 * me: 求最值 应该首先考虑到dp算法
 * 题解：dong: https://labuladong.gitee.io/algo/3/26/99/
 */

/**
 * 东哥的方法:动态规划-dp数组法: 一套状态转移方程解决所有股票买卖问题
 * 1. 当然，可以对dp进一步使用状态压缩
 * 时间：O(n)
 * 空间: O(n)
 * @param {*} prices 
 */
var maxProfit = function(prices) {
  // 防御
  if (!Array.isArray(prices)) return;
  if (prices.length === 0) return 0;
  // 初始化变量
  const len = prices.length;
  // 初始化dp数组
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [0, 1];
  }
  // 核心算法
  for (let i = 0; i < len; i++) {
    // base case
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    };
    // 状态转移方程 dp[i][k][j]： 3个状态：i k j; i代表第几天，k代表允许交易的最大次数，这里k=1；j 枚举2个值： 1代表持有；0代表不持有
    // 今天不持有：选择：reset: 昨天就不持有； sell：昨天持有，今天卖出
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    // 今天持有：选择：reset: 昨天就持有； buy：昨天不持有，今天买进
    dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  }
  // 返回值 （卖出股票 才是最大值）
  return dp[len - 1][0];
}

/**
 * [通过：官方解法]使用minPrice记录最低价格（动态），然后计算每天选择是否卖出
 * @param {*} prices 
 * @returns 
 */
const maxProfit2 = function(prices) {
  // 防御
  if (!Array.isArray(prices)) return;
  if (prices.length === 0) return 0;
  // 初始化值
  const len = prices.length;
  let minPrice = Number.MAX_VALUE; // 取一个达不到的最大值 要不然很容易一直停留在初始值这里
  let maxProfitVal = 0; // 记录最大利润
  // 核心算法
  for (let i = 0; i < len; i++) {
    // 如果当前价格小于最小价格 更新最小价格minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      continue;
    }
    // 如果当前价格卖出 获利大于历史最大获利 则更新maxProfitVal
    if (prices[i] - minPrice > maxProfitVal) {
      maxProfitVal = prices[i] - minPrice;
    }
  }
  // 返回值
  return maxProfitVal;
}


/**
 * [不合格:复杂度过高，大数量的case没跑过]
 * me: 优先考虑下：dp() 自顶向下处理
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
  // 防御
  if (!Array.isArray(prices)) return;
  if (prices.length === 0) return 0;
  // 初始化变量
  const memo = []; // 备忘录
  const minPrices = []; // 记录截止到i的最小price
  // 核心算法
  /**
   * dp函数定义 dp(i)： 第i天卖出的话 能获得最大利润
   * @param {*} i 
   */
  const dp = (i) => {
    // base case
    if (i <= 0) {
      minPrices[i] = 0;
      return 0;
    };
    // 查备忘录(数字类型：要注意0也是有效数字)
    if(memo[i] === 0 || memo[i]) return memo[i];
    // 之前的最低价
    const minPrice = Math.min(minPrices[i - 1], prices[i]);
    // 状态转移方程： 选择： 第i天不卖出 ： 第i天卖出
    memo[i] = Math.max(dp(i - 1), prices[i] - minPrice);
    return memo[i];
  }
  // 返回值
  return dp(prices.length - 1);
};

module.exports = maxProfit;