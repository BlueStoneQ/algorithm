/**
 * leet: https://leetcode-cn.com/problems/powx-n/
 * 2022-3-31
 * 快速幂解释：https://leetcode-cn.com/problems/powx-n/solution/java-kuai-su-mi-si-lu-qing-xi-dai-ma-jia-60hk/
 */

/**
 * 

 [√]方法1：暴力遍历 O(n) 
  - 会超时 了解下 注意对于n<0的防御处理
 方法2：递归实现-快速幂算法 O(logN)
    - 考点 复杂度优化和分析 快速幂算法的解释
 
 
 @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  // defend
  if (n === 0) return 1;
  if (n === 1) return x;

  // x^-4 负数次幂
  if (n < 0) {
      x = 1/x;
      n = -n;
  }
  // init data
  let result = 1;
  // algo
  for (let i = 1; i <= n; i++) {
      result *= x;
  }
  // return
  return result;
};