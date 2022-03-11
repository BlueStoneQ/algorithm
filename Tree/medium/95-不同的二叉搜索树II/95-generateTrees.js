/**
 * leet: https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
 * Date: 2022-2-6
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247490696&idx=1&sn=798a350fcca16c89572caf65323dbec7&scene=21#wechat_redirect
 * js版题解: https://leetcode-cn.com/problems/unique-binary-search-trees-ii/solution/hou-xu-di-gui-bian-li-si-lu-zhi-you-3ju-1tyks/
 * 思路概要：
 *  - 穷举root节点的所有可能。
 *  - 递归构造出左右子树的所有合法 BST。
 *  - 给root节点穷举所有左右子树的组合。
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *  时间复杂度：O(n) * o(n) = O(n^2)  [循环n * 递归n]
 *  空间复杂度：O(n^2) 主要是备忘录,而且备忘录中每个元素是Array，每个Array又至多存储n个元素 所以 是O(n^2)
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  // 防御
  if (n === 0) return new TreeNode();

  // 备忘录
  const memo = [];
  for (let i = 0; i < n + 1; i++) {
      memo[i] = [];
  }


  /**
  * 定义递归函数
  * 循环 调用 递归
  * 计算在[start, end]（有序区间）中的可构成BST的的根节点的数组
  */
  function _generateTrees(start, end) {
      let res = [];

      // base case: Null也是一种情况
      if (start > end) {
          res.push(null);
          return res;
      };

      // 查下备忘录
      if (memo[start][end]) return memo[start][end];

      // 递归调用 左右区间的组合数  闭区间：包括start end的情况
      for (let i = start; i <= end; i++) {
          // 根据：i为的root的话，因为[1,n]实际上为有序递增的序列，i的left一定是[start, 1]区间的组合； i的right一定是[i+1, end]的组合
          // 计算以i为root的左右子树的BST的root组成的Array 
          const leftTreeArr = _generateTrees(start, i - 1); // 树的存储 我们一般都是只要存储其root节点 就可以引用整棵树
          const rightTreeArr = _generateTrees(i + 1, end);
          // 后序：拼装左右区间的BST所有组合的可能的BST - 直接双层遍历 枚举所有组合
          for (let leftTree of leftTreeArr) {
              for (let rightTree of  rightTreeArr) {
                  res.push(new TreeNode(i, leftTree, rightTree));
              }
          }
      }

      // 结果存入备忘录
      memo[start][end] = res;

      return res;
  }

  return _generateTrees(1, n);
};

module.exports = generateTrees;