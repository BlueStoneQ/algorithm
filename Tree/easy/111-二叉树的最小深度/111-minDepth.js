/**
 * leet: https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
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
 * 递归法
 * 题解：https://programmercarl.com/0111.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.html
 * - 最小深度是从根节点到最近叶子节点的最短路径上的节点数量
 * - 和最大深度不同的地方：
 *  最小深度是从根节点到最近叶子节点的最短路径上的节点数量。，注意是叶子节点。
 *    什么是叶子节点，左右孩子都为空的节点才是叶子节点！
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
  // base case
  if (root === null) return 0;

  // 判断case1: 左子树为null 右子树不为null的情况下 最小深度为： 1 +  right.depth
  if (root.left === null && root.right !== null) return minDepth(root.right) + 1;
  // 判断case2: 右子树为null 左子树不为null的情况下 最小深度为： 1 +  left.depth
  if (root.right === null && root.left !== null) return minDepth(root.left) + 1;

  // case3: 左右子树均不为null
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};