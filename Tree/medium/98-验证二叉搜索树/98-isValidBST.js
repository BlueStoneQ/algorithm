/**
 * leet: https://leetcode-cn.com/problems/validate-binary-search-tree/
 * Date: 2022-2-5
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247488128&idx=2&sn=b8fb3fd2917f9ac86127054741cd5877&scene=21#wechat_redirect
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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  return _isValidBST(root, null, null);
};

/**
* 定义递归函数：判断当前子树是否符合BST要求 符合 返回true; 不符合返回 false
* 1. 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val
*/
function _isValidBST(curRoot, minNode, maxNode) {
  // base case
  if (curRoot === null) return true;
  // 判断当前树 是否不满足平衡规则
  if (minNode && minNode.val >= curRoot.val) return false;
  if (maxNode && maxNode.val <= curRoot.val) return false;
  // 判断左子树 和 右子树 同时 返回结果
  return _isValidBST(curRoot.left, minNode, curRoot) && _isValidBST(curRoot.right, curRoot, maxNode);
}

module.exports = isValidBST;
