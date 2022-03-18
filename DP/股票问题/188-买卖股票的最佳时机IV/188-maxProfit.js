/**
 * leet: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
 * 2022-3-18
 * kaer: https://programmercarl.com/0188.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIV.html#%E6%80%9D%E8%B7%AF
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494095&idx=4&sn=7aed55b22e93c0e43b83172923b51acc&scene=21#wechat_redirect
 */

/**
 DP： 三维dp-股票问题通用模板
 * 这道就是初始模板题，其他股票问题都是这道题的变种：
 本题的解法 更接近于一个通用型的模板解法：

 另外：交易的概念：一次交易 就是 买入 + 卖出 2个闭环操作
 所以 k笔交易 就代表k次：买入卖出

 另外 通用的解题模板一定是一个三维数组：
 dp[i][j][k]
 那么 通过滚动数组（奇偶滚动）等方案 必须会降低空间复杂度 这个肯定是一个优化考点

 另外 这个问题 的状态变化 可以用一个状态机表示 
 持有1 - 不持有0，通过买入 卖出 或者 无操作 三个动作 进行状态的转换和继承

 另外 要理解 状态 是一个静止概念，不是买入 卖出的动作

 DP五部曲：
 1. dp数组定义
 dp[i][j][k]: 第i天, 当前的最大交易次数上限为j，状态为k, 所剩下的最大现金是dp[i][j][k]
 j代表当前最大交易的阈值，或者说当前交易是第j次交易
 k代表股票的持有状态，可枚举：0-不持有 1-持有

 2. 状态转移方程
 不持有状态：
 dp[i][j][0] = max([昨天不持有 交易次数上限为j 今天选择rest 所以今天继承昨天不持有的状态], [昨天持有 交易次数上限为j 今天卖出 不持有])
             = max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
 持有状态： 
 dp[i][j][1] = max([昨天持有 交易次数上限为j 今天rest 今天继承昨天的持有状态], [昨天不持有 交易次数上限为j -1  今天买入 持有])
             = max(dp[i - 1][j][1], dp[i- 1][j - 1][0] - prices[i])
             注意：这里昨天不持有 今天需要一个买入操作的话 则昨天的交易次数上限应该为j - 1,这样的话，今天操作次数上限j,才能给今天的买入（开启一次交易）留出一次操作的机会空间
 3. 初始化dp数组
    1. 因为求max值 我们的初始值先都初始化为0
    2. 另外 我们需要初始化第0天的操作 第0天的操作 和 j 不相关，只跟状态k有关
        - dp[0][j][0] = 0; // 不持有 就是没有花钱
        - dp[0][j][1] = -prices[0] // 持有 不管第几次持有 都是-prices[0]
    3. 在某些题解中 k = [0, 1]的状态 可以消除掉 用j的奇偶来代替，但奇偶只能表示两种状态，可以降低空间复杂度，但是方法不具有普适性，我们这里是一个重视思路的普适性方法
 4. 遍历方向
i 从小到大
j 从小到大
k 枚举即可 不需要遍历 顺序不敏感
 5. 举例推导dp数组

 复杂度：

 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
  // defend
  if (prices.length <= 0) return 0;
  // init data
  const pricesLen = prices.length;
  const dp = new Array(pricesLen).fill(0).map(() => new Array(k + 1).fill(0).map(() => [0, 0]));
  
  // 初始化dp i = 0, 也就是第0天的状态枚举
  for (let j = 0; j <= k; j++) {
      dp[0][j][0] = 0;
      
      if (j === 0) {
          // j === 0 的时候 其实什么都做不了 就是初始值 0，但其实j = 0, 状态为1的情况 定义为什么值，都不影响，因为根据递推公式，这个值根本不会访问
          dp[0][j][1] = 0;
      } else {
          // j > 0 此时 如果持有 肯定是买入 需要花去prices[0]
          dp[0][j][1] = -prices[0];
      }
  }
  // 初始化 j = 0的情况 此时 什么都不能做

  // algo
  for (let i = 1; i < pricesLen; i++) {
      for (let j = 1; j <= k; j++) { 
          // 优化1： 0  1状态 可以用j的奇偶来代替 可以降低一层空间复杂度
          // 优化2： 利用滚动数组 或者 2个变量表示相邻的状态值 也可以降低复杂度
          dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]); // 不持有
          dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i- 1][j - 1][0] - prices[i]); // 持有
      }
  }

  // return 当然 最大的利润 当然来自最后将手中的股票清空
  return dp[pricesLen - 1][k][0];
};