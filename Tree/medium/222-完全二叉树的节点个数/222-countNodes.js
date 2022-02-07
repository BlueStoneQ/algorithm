/**
 * leet: https://leetcode-cn.com/problems/count-complete-tree-nodes/
 * Date: 2022-2-7
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
 * 递归：暴力全遍历，适用于所有类型二叉树
 * 时间复杂度：
 * 空间复杂度：
 * @param {TreeNode} root
 * @return {number}
 */
 var countNodes = function(root) {
  // base case
  if (root === null) return 0;
  // 调用递归: 当前根节点下节点数：左右子树节点数 + 1（当前根节点）
  return countNodes(root.left) + countNodes(root.right) + 1;
};