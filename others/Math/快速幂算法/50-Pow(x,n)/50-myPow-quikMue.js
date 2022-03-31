/**
 * leet: https://leetcode-cn.com/problems/powx-n/
 * 2022-3-31
 * 快速幂解释：https://leetcode-cn.com/problems/powx-n/solution/java-kuai-su-mi-si-lu-qing-xi-dai-ma-jia-60hk/
 */


/**
[√]方法1：暴力遍历 O(n) 
- 会超时 了解下 注意对于n<0的防御处理
方法2：递归实现-快速幂算法-递归 O(logN)
- 考点 复杂度优化和分析 快速幂算法的解释
    - O(logN)
 @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  // defend n < 0
  if (n < 0) {
      x = 1/x;
      n = -n;
  }
  // base case
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n % 2 === 0) {
      // 偶数 x^4 = x^2 * x^2
      const y = myPow(x, n / 2); // 这一步优化很重要 每次递归调用 只有一个myPow调用 一共有logN次调用
      return y * y;
  }

  // 当前n是奇数 x^5 = x^2 * x^2 * x
  const y = myPow(x, (n - 1) / 2);
  return y * y * x;
};