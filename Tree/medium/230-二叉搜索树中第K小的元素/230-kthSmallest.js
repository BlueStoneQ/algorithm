/**
 * leet: https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * Date: 2022-2-5
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247488101&idx=1&sn=6041ddda5f20ccde8a7036d3e3a1482c&scene=21#wechat_redirect
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
 * 方法1：递归 + 计数法
 * BST: preorder是有序的 且是升序
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  // 结果
  let res;

  const _traverse = function(curRoot) {
      // base case
      if (curRoot === null) return;
      // 递归函数
      _traverse(curRoot.left);
      // 满足条件 到达第k个最小值 则记入结果 同时返回 从这一层开始逐层结束递归 减少无谓递归
      if (--k === 0) {
          res = curRoot.val;
          return;
      }
      _traverse(curRoot.right);
  }

  _traverse(root);
  
  return res;
};

module.exports = kthSmallest;