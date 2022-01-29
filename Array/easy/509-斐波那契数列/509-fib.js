/**
 * leetCode: https://leetcode-cn.com/problems/fibonacci-number/
 * Date: 2022-1-29
 * me: 斐波那契数列数列：要求至少2种解法：
 * 1. 递归：自顶向下
 * 2. 迭代：自底向上 + 状态压缩 （面试官肯定期望简单问题能给出尽可能优的解）
 */

/**
 * 法1: 递归解法：自顶向下
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // 防御
  if (typeof n !== 'number') return;
  // 初始化值
  // 核心算法
  // 边界
  if (n === 0) return 0;
  if (n === 1) return n;
  // 递归调用 状态转移方程
  return fib(n - 1) + fib(n - 2);
};

/**
 * 法2: 迭代解法：自底向上
 * @param {number} n
 * @return {number}
 */
 var fib2 = function(n) {
   // 防御
   if (typeof n !== 'number') return;
   // 初始化变量
   const dp = [];
   dp[0] = 0;
   dp[1] = 1;
   // 遍历
   for (let i = 2; i <= n; i++) {
     dp[i] = dp[i-1] + dp[i-2];
   }
   // 返回结果
   return dp[n];
 }

 /**
 * 法2+1: 迭代解法：自底向上
 * 加入状态压缩
 * @param {number} n
 * @return {number}
 */
  var fib3 = function(n) {
    // 防御
    if (typeof n !== 'number') return;
    // base case
    if (n <= 1) return n;
    // 初始化变量
    let n2 = 0; 
    let n1 = 1;
    let res = 1;
    // 遍历
    for (let i = 2; i <= n; i++) {
      res = n1 + n2;
      n2 = n1;
      n1 = res;
    }
    // 返回结果
    return res;
  }

module.exports = fib3;