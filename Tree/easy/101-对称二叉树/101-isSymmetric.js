/**
 * leet: https://leetcode-cn.com/problems/symmetric-tree/
 * Date: 2022-2-7
 * 比对：leet: https://leetcode.cn/problems/same-tree/
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
 * 方法1：递归法
 * 1. 比较2个子树 如果2个子树为镜像：
 *  - 左右子树的根节点值相同
 *  - left.left 和 right.right 镜像对称
 *  - left.right 和 right.left 镜像对称
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  // 防御 处理边界值
  if (root === null) return true;
  // 调用辅助函数 返回值
  return _isSymmetric(root.left, root.right);
};

/**
* 判断tree1和tree2 是否镜像对称
* @returns {bool} 是否镜像对称，true: 镜像对称
*/
function _isSymmetric(tree1, tree2) {
  // base case
  if (tree1 === null && tree2 === null) return true; // 两个null树 肯定镜像对称
  if (tree1 === null || tree2 === null) return false; // 一个空 一个非空 肯定不对称
  // 递归判断左右子树的情况
  return tree1.val === tree2.val
      && _isSymmetric(tree1.left, tree2.right)
      && _isSymmetric(tree1.right, tree2.left);
}