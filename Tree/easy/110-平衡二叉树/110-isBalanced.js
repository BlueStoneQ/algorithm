/**
 * leet: https://leetcode-cn.com/problems/balanced-binary-tree/
 * Date: 2022-2-7
 * 题解：https://programmercarl.com/0110.%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91.html
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
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
  // 防御 空节点默认为平衡 符合平衡的定义
  if (root === null) return true;

  // 调用递归
  return _getHeight(root) === -1 ? false : true;
};

/**
* 辅助递归函数定义：返回当前节点为root的树的高度; 
  - 在函数体中判断：左右子树的高度差 如果超过1 则返回-1
*/
function _getHeight(curRoot) {
  // base case: null节点的高度，在leet这边定义为1；其他定义为0
  if (curRoot === null) return 1;
  
  // 递归调用 获得左右子树的高度
  const leftHeight = _getHeight(curRoot.left);
  if (leftHeight === -1) return -1; // 及时短路 已经不平衡 右子树就不用看了
  const rightHeight = _getHeight(curRoot.right);
  if (rightHeight === -1) return -1;

  // 比较当前左右子树的高度差 是否>1
  if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
  }

  // 递归调用
  return Math.max(_getHeight(curRoot.left), _getHeight(curRoot.right)) + 1;
}