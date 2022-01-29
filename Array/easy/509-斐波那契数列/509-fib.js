/**
 * leetCode: https://leetcode-cn.com/problems/fibonacci-number/
 * Date: 2022-1-29
 * me: 斐波那契数列数列：要求至少2种解法：
 * 1. 递归：自顶向下
 * 2. 迭代：自底向上
 */

/**
 * 法1: 递归解法
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // 防御
  if (typeof n !== 'number') return;
  if (n === 0) return [0];
  // 初始化值
  // 核心算法
  // 边界
  if (n === 0) return 0;
  if (n === 1) return n;
  // 递归调用 状态转移方程
  return fib(n - 1) + fib(n - 2);
};

module.exports = fib;