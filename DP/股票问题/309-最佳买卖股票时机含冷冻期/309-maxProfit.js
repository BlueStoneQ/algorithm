/**
 * leet: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * 2022-3-18
 * kaer: https://programmercarl.com/0309.%E6%9C%80%E4%BD%B3%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E6%97%B6%E6%9C%BA%E5%90%AB%E5%86%B7%E5%86%BB%E6%9C%9F.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 
 增加冰冻期后 其实是在经典股票问题模型上 将状态的枚举复杂了而已
 只要我们定义出合适的状态机: 状态枚举 和 状态转移机制 
 就可以比较顺利推出 状态转移方程
 
 * DP五部曲
 1. dp数组定义
 我们还是从dp[i][j][k] 推导 其中 状态可枚举，j次数在这里是无影响的因素 可以划掉
 dp[i][j]：第i天 状态是j的情况 手里拥有的最大的资金
    j这里其实是枚举的状态， 这里表面看起来是3个状态，如果清晰划分是4个状态：
    0 - 持有
    1 - 不持有, 今天刚卖出（这个状态第二天是冰冻期，不能买入持有, 只有状态2一个后驱状态）
    2 - 不持有(且处于冷冻期), 昨天卖出 （只有状态1一个前驱状态）
    3 - 不持有(非冷冻期，且可以买入), 超过2天前卖出（这个状态可以买入变成持有的状态）
    状态转移关系：0 -> 1 -> 2 - > 3 -> 0, 其中 只有 0 3 是可以rest的状态 也就是可以前一天也是同一状态，今天不做任何操作

    状态转移关系：

     __                    __ 
    |  |                  |  |
    |  V                  |  V
      0  ---> 1 ---> 2 ---> 3
      |              |      |    
      |              V      V
      |<——------------------


 2. dp递推公式
 求最值 当然是max啦
 dp[i][0] = max([rest:前一天就是持有的状态，状态继承即可], [前一天是状态2(冰冻状态)，今天买入成为持有状态],[前一天是状态3，今天买入成为持有状态])
          = max(dp[i - 1][0], dp[i - 1][2] - prices[i], dp[i - 1][3] - prices[i])

 dp[i][1] = [昨日是持有状态，今日卖出]
          = dp[i - 1][0] + prices[i]
 
 dp[i][2] = [昨日是状态1，是状态2的唯一前驱状态]
          = dp[i - 1][1]

 dp[i][3] = max([rest: 昨天就是状态3：可以买入的持有状态], [昨天刚好是冰冻期])
          = max(dp[i - 1][3], dp[i - 1][2])


 3. dp初始化
 根据递推公式：求正整数的max值 我们首先 全量初始化为0
 i = 0的情况 
 dp[0][0] = -prices[0]; // 第一天如果是持有状态 只有一种情况：买入
 dp[0][1] = 0 // 无意义，保持默认的值, 或者说保持不持有的状态
 dp[0][2] = 0
 dp[0][3] = 0


 4. 遍历方向
 根据状态转移顺序，i-1 => i，从小到大
 5. 举例推导dp数组

 * 复杂度：
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  // defend
  // init data
  const pricesLen = prices.length;
  // 一共4种状态 这里第二维数组初始化为4个元素
  const dp = new Array(pricesLen).fill(0).map(() => new Array(4).fill(0));

  dp[0][0] = -prices[0];


  // algo i = 0 作为base case已经定义过了
  for (let i = 1; i < pricesLen; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i], dp[i - 1][3] - prices[i]);
      dp[i][1] = dp[i - 1][0] + prices[i];
      dp[i][2] = dp[i - 1][1];
      dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2]);
  }

  // return 3个不持有状态中 找出最大的
  return Math.max(dp[pricesLen - 1][1], dp[pricesLen - 1][2], dp[pricesLen - 1][3]);
};