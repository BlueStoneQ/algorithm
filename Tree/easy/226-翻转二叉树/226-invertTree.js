/**
 * leet: https://leetcode-cn.com/problems/invert-binary-tree/
 * Date: 2022-2-4
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487126&idx=1&sn=4de13e66397bc35970963c5a1330ce18&scene=21#wechat_redirect
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  // base case
  if (root === null) return null;
  // 交互左右子节点
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  // 反转左右子树
  invertTree(root.left);
  invertTree(root.right);
  return root;
};