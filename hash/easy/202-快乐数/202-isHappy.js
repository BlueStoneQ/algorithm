/**
 * leet: https://leetcode-cn.com/problems/happy-number/
 * Date: 2022-2-17
 * kaer: https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html
 */

/**
 * 方法1： 集合查找法
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  // defend
  // init data
  const set = new Set();
  // algo
  while (true) {
      // 结果等于1 return true
      if (n === 1) return true;
      // 在set中查到 证明有循环 return false
      if (set.has(n)) return false;
      // 记录进set
      set.add(n);
      n = getBitSquareSum(n);
  }
};

/**
* 求n各个位上的数字平方之和
*/
function getBitSquareSum(n) {
  // 防御
  // init data
  let res = 0;
  // 循环计算各位
  while (n) {
      const curBit = n % 10;
      res += curBit * curBit;
      n = Math.floor(n / 10);
  }
  // 返回结果
  return res;
}