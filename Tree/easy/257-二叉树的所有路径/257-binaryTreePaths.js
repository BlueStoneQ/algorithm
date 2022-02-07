/**
 * leet: https://leetcode-cn.com/problems/binary-tree-paths/
 * Date: 2022-2-7
 * 自己的解法，关键是定义好辅助递归函数
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  // 防御
  if (root === null) return [];

  return _binaryTreePaths(root);
};

/**
* 辅助递归函数定义：返回当前根节点的所有路径的数组
*/
function _binaryTreePaths(curRoot) {
  // base case
  if (curRoot === null) return [];
  // 如果左右子树都是null 则直接返回当前节点值
  if (curRoot.left === null && curRoot.right === null) return [`${curRoot.val}`];

  // 初始化变量
  const res = [];
  // 递归调用
  const leftPaths = _binaryTreePaths(curRoot.left);
  const rightPaths = _binaryTreePaths(curRoot.right);

  // 生成当前根节点的所有到叶子节点的路径数组
  for (let path of leftPaths) {
      res.push(curRoot.val + '->' + path);
  }

  for (let path of rightPaths) {
      res.push(curRoot.val + '->' + path);
  }
  // 返回该节点的所有路径数组
  return res;
}