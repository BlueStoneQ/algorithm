/**
 * leet: https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
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
 * 递归法
 * 时间复杂度： O(logN)
 * 空间复杂度: ??
 * @param {TreeNode} curRoot
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function(curRoot, val) {
  // base case 找到了位置 返回要插入的节点给父节点
  if (curRoot === null) return new TreeNode(val);
  // 满足插入条件 则进行插入
  if (curRoot.val > val) {
      // val小于当前值 则应该插入到当前节点的leftTree中
      curRoot.left = insertIntoBST(curRoot.left, val);
  } else {
      curRoot.right = insertIntoBST(curRoot.right, val);
  }
  return curRoot;
};

module.exports = insertIntoBST;

