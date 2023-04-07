/**
 * leet: https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * Date: 2022-2-4
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494655&idx=1&sn=f3445112d7322ea8491073fd2d19f25c&scene=21#wechat_redirect
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 前序：根左右
 * 中序：左根右
 * 后序：左右根
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  // 初始化变量
  let res = [];
  // 定义辅助遍历函数: 单纯递归遍历
  const _traverse = function(cur) {
      // base case
      if (cur === null) {
          return;
      }
      // 前序遍历位置
      res.push(cur.val);
      // 递归遍历
      _traverse(cur.left);
      // 中序遍历位置
      _traverse(cur.right);
      // 后序遍历位置
  }
  // 调用辅助遍历函数
  _traverse(root);
  // 返回结果
  return res;
};

module.exports = preorderTraversal;