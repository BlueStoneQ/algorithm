/**
 * leet: https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * Date: 2022-2-5
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
 * 递归法
 * 递归函数定义：把以root为根节点的二叉树 拉平为链表
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
  // base case
  if (root === null) return root;
  // 1. 调用递归，将左右子树拉平为链表
  flatten(root.left);
  flatten(root.right);
  // 记录之前的右子树
  originalRight = root.right;
  // 2. 将左子树接到右子树上，原左子树置为null
  root.right = root.left;
  root.left = null;
  // 3. [!!!]将原来的右子树接到目前右子树的最末端
  while (root.right !== null) {
      // 指针移动到当前右子树的叶子节点
      root = root.right;
  }
  root.right = originalRight;
};

module.exports = flatten;