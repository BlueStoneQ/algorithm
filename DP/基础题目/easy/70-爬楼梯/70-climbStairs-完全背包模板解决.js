/**
 * leet: https://leetcode-cn.com/problems/climbing-stairs/submissions/
 * 2022-3-16
 * kaer: https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85%E7%89%88%E6%9C%AC.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 方法2： 完全背包模板解决
 * 首先 这个问题 是一个求排列的问题：
 * 可以用完全背包的模板去解决这个问题，完全背包能适应更多种的步数：
 例如问题改成这样：一步一个台阶，两个台阶，三个台阶，.......，直到 m个台阶。问有多少种不同的方法可以爬到楼顶呢？
 在这道题中：m = 2, 也就是物品是 [1, 2]这样

 DP五部曲：
 1. dp数组定义：爬到第i个台阶 有dp[i]种方法
 2. dp递推公式：dp[i] += dp[i - j], j就是步数（物品的枚举）
 3. 初始化dp数组：dp[0] = 1, 其他非0下标初始化为0
 - dp[0]是递归中一切数值的基础所在，如果dp[0]是0的话，其他数值都是0了
 - 下标非0的dp[i]初始化为0，因为dp[i]是靠dp[i-j]累计上来的，dp[i]本身为0这样才不会影响结果
 4. 遍历方向：
确定问题类型：背包中求排列的问题：
外层：正序 背包
内层：正序 物品
 5. 举例推导dp数组：

 复杂度：


 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  // defend
  // init data
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  // algo
  for (let i = 0; i <= n; i++) {
      for (let j of [1, 2]) { // 物品这里是 1,2 ，如果是m的话 则可以生成下一个1-m的数组作为物品
          if (i >= j) {
              dp[i] += dp[i - j];
          }
      }
  }

  // return 
  return dp[n];
};