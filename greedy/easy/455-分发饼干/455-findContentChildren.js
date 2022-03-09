/**
 * leet: https://leetcode-cn.com/problems/assign-cookies/
 * 2022-3-9
 * kaer: https://programmercarl.com/0455.%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 初识贪心思想：满足局部最优解 就能满足全局最优解
 * 局部最优解就是：大饼干优先喂饱胃口大的孩子
 * 全局最优解: 尽可能喂饱多的孩子
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
  // defend
  // init data
  let result = 0; // 满足孩子的个数
  // 排序2个数组 使最大尺寸的饼干 匹配 胃口最大的孩子
  s.sort((a, b) => b - a); // 降序排序
  g.sort((a, b)=> b - a); // 降序排列

  // algo
  let sIndex = 0, gIndex = 0;
  while (sIndex < s.length) {
      if (gIndex > g.length - 1) break; // 孩子匹配完了 循环结束
      
      if (s[sIndex] >= g[gIndex]) {
          // 喂饱了一个孩子
          sIndex++;
          gIndex++;
          result++;
      } else {
          // 不能喂饱这个孩子 那么 就跳到下个孩子 饼干继续用当前饼干
          gIndex++;
      }        
  }

  // return
  return result;
};