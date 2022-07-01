/**
 * 2022-6-24
 * leet: https://leetcode.cn/problems/same-tree/
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
 * DFS
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  // defend
  if (p === null && q === null) return true;
  if (p === null || q === null) return false; // 只有一棵树到了叶子节点的子节点 则肯定不一样
  // init data
  const isCurNodeSame = p.val === q.val; // 当前节点是否一样
  // algo
  // return
  return isCurNodeSame
      && isSameTree(p.left, q.left)
      && isSameTree(p.right, q.right);
};