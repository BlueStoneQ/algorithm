/**
 * leet: https://leetcode-cn.com/problems/sum-of-left-leaves/
 * Date: 2022-2-8
 * 代码随想录：https://programmercarl.com/0404.%E5%B7%A6%E5%8F%B6%E5%AD%90%E4%B9%8B%E5%92%8C.html
 * 类型：二叉树属性
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
 * 递归法: 自己的一个解法
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
  // 防御
  if (root === null) return 0;

  // 调用辅助递归
  return _sumOfLeftLeaves(root.left, true) + _sumOfLeftLeaves(root.right, false);
};

/**
* 辅助递归函数：返回当前curRoot为root节点的树的左叶子节点之和
* @return {number}
*/
function _sumOfLeftLeaves(curRoot, isLeft) {
  // base case1
  if (curRoot === null) return 0;

  if (curRoot.left === null && curRoot.right === null) {
  // base case2.1 当前节点是左叶子节点 返回当前叶子节点的值
      if (isLeft) {
          return curRoot.val;
      }
      // base case2.2 当前节点是右叶子节点 返回0
      if (!isLeft) {
          return 0;
      }
  }

  // 调用递归: 返回左右子树的左叶子节点和的 和
  return _sumOfLeftLeaves(curRoot.left, true) + _sumOfLeftLeaves(curRoot.right, false);
}