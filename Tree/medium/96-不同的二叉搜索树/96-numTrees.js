/**
 * leet: https://leetcode-cn.com/problems/unique-binary-search-trees/
 * Date: 2022-2-6
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247490696&idx=1&sn=798a350fcca16c89572caf65323dbec7&scene=21#wechat_redirect
 */


/**
 * 方法1： 循环递归 + 备忘录
 * 时间复杂度：O(n) * o(n) = O(n^2)  [循环n * 递归n]
 * 空间复杂度：O(n) 主要是备忘录
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
  // 防御: 
  if (n <= 1) return 1;
  
  // 备忘录
  const memo = [];
  for (let i = 0; i < n + 1; i++) {
      memo[i] = new Array(n + 1).fill(0);
  }


  /**
  * 定义递归函数
  * 循环 调用 递归
  * 在[start, end]（有序区间）中的可构成BST的个数
  */
  function _numTrees(start, end) {
      // base case: Null也是一种情况
      if (start > end) return 1;

      // 查下备忘录
      if (memo[start][end]) return memo[start][end];

      // 初始化数据结构
      let res = 0;
      // 递归调用 左右区间的组合数  闭区间：包括start end的情况
      for (let i = start; i <= end; i++) {
          // 计算以i为root的左右子树的BST的个数
          const leftBstCount = _numTrees(start, i - 1);
          const rightBstCount = _numTrees(i + 1, end);
          // 后序：计算左右区间的组合数的乘积
          res += leftBstCount * rightBstCount;
      }

      // 结果存入备忘录
      memo[start][end] = res;

      return res;
  }

  return _numTrees(1, n);
};

module.exports = numTrees;