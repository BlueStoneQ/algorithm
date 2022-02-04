/**
 * leet: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * Date：2022-2-4
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494655&idx=1&sn=f3445112d7322ea8491073fd2d19f25c&scene=21#wechat_redirect
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
 *  递归法
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  // base case
  if (root === null) {
      return 0;
  }
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};