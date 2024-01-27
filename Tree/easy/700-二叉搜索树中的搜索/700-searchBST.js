/**
 * leet: https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
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
 * 时间复杂度：O(logN)其实BST相当于将树二分了 left小 right大 -> 类似于二分法（每次只需要查一半，查找的次数x, 则2^x = n => x =    logN） 这样的查找效率是 logN级别的
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
  function _searchBST(curRoot) {
    // base case
    if (curRoot === null) return null;
    // curRoot.val == val 返回当前节点
    if (curRoot.val === val) return curRoot;
    // curRoot.val < val 则要去rigth子树查找val
    if (curRoot.val < val) return searchNode(curRoot.right);
    // curRoot.val > val 则要去left子树查找val
    if (curRoot.val > val) return searchNode(curRoot.left);
  }

  return _searchBST(root);
};