/**
 * leet: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/
 * Date: 2022-2-5
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247488101&idx=1&sn=6041ddda5f20ccde8a7036d3e3a1482c&scene=21#wechat_redirect
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
 * BST中序遍历：升序
 * 如何降序访问呢？通过调换访问子树的顺序：右 -> 左
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var bstToGst = function(root) {
  // 按照降序访问 记录累加的当前节点之前的所有值的累加和（降序 前面访问的所有值都比当前节点值大）
  let sum = 0;
  // 辅助递归函数: 中序-降序访问节点
  const _traverse = function(curRoot) {
      // base case
      if (curRoot === null) return;
      // 调用递归
      _traverse(curRoot.right);
      // 更新累加和 并 更新当前节点的值
      sum += curRoot.val;
      curRoot.val = sum;
      _traverse(curRoot.left);
  }
  // 调用递归函数
  _traverse(root);
  // 返回结果
  return root;
};

module.exports = bstToGst;