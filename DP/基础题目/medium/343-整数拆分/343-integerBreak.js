/**
 * leet: https://leetcode-cn.com/problems/integer-break/
 * 2022-3-11
 * kaer: https://programmercarl.com/0343.%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * DP五部曲：
 * dp数组定义：分拆数字i 能得到的最大乘积为dp[i]
 * 状态转移方程：内循环遍历j(0->j)dp[i] = max(dp[i], dp[i - j] * j, (i - j) * j)
 * 遍历方向：i 从 2 到 大, j从1到i-1
 * i: 2->n; j: 1 -> i - 1
 * dp数组初始化值：dp[0] 和 dp[1] 无解 不具有意义；dp[2] = 1
 * 举例dp数组：i >= 2, dp[i] = [1, ]
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {
  // defend
  if (n === 2) return 1;

  // init data
  // 为了下面的下标到达n 最后一个值为dp[n] 则数组的长度其实为n+1;
  const dp = new Array(n + 1).fill(0); // 因为下面有dp[i]参与计算 在初次计算的时候 理应有一个最小值 才能让max比较继续(启动起来)下去 dp[i]才能在j循环中滚动赋值 如果不赋值 一般就是undefined Math.max(undefined, ...) 始终为NaN 算法无法继续
  dp[2] = 1;

  // algo
  for (let i = 3; i <= n; i++) {
    // 其实 j就是切割点，切割成i - j 和 j 两部分, 
    for (let j = 1; j < i; j++) {
        // 右侧的dp[i]其实可以理解为在j循环中得出的上一个值 需要参与本次计算 当然 它需要一个初始值，这个初始值要尽可能小 才能让max算法滚动起来 dp[i]才会产生变化
        // (i - 1) * j 就是将i拆分成：i-j和j2个数，dp[i - j]也就是j前面多个数的最大乘积
        // dp[i] 记录着在内循环中目前为止最大的值 看是不是有新值可以取代它
        dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }

  // return 
  return dp[n];
};