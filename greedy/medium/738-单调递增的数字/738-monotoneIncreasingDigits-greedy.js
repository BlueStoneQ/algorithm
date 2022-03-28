/**
 * leet: https://leetcode-cn.com/problems/monotone-increasing-digits/
 * 2022-3-28
 * kaer: https://programmercarl.com/0738.%E5%8D%95%E8%B0%83%E9%80%92%E5%A2%9E%E7%9A%84%E6%95%B0%E5%AD%97.html#%E6%9A%B4%E5%8A%9B%E8%A7%A3%E6%B3%95
 */

/**
 * 

 方法1： 暴力  - 会超时，但是解法有助于练习编程模拟能力
 [√]方法2： 贪心-序列
 
 局部最优：遇到strNum[i - 1] > strNum[i]的情况，让strNum[i - 1]--，然后strNum[i]给为9，可以保证这两位变成最大单调递增整数。

全局最优：得到小于等于N的最大单调递增的整数。

但这里局部最优推出全局最优，还需要其他条件，即遍历顺序，和标记从哪一位开始统一改成9。

复杂度：
时间：
空间：
 
 @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
  // defend
  // init data
  let flag = Infinity;  // 标记9的起点位
  // 先把数字变成字符串 -> 数组 这样就变成了一个可迭代遍历各位的对象了
  const nArr = n.toString().split('').map(item => +item);
  // algo i > 0,也就是i = 1, i - 1 = 0为最后一组访问到的下标
  for (let i = nArr.length - 1; i > 0; i--) {
      if (nArr[i - 1] > nArr[i]) {
          // 上一位比当前这一位大 则上一位值-- 当前位取9
          nArr[i - 1]--;
          flag = i; // 标记9的起点位
      }
      // 上一位小于等于当前位 什么都不做 继续向左边位遍历
  }

  // 从flag未起点 接下来的所有位都是i
  for (let i = flag; i < nArr.length; i++) {
      nArr[i] = 9;
  }

  // return 
  return +(nArr.join(''));
};