/**
 * leet: https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 * 2022-7-16
 * 题解:剑指前端：https://febook.hzfe.org/awesome-interview/book3/algorithm-binary-tree-k
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归法-逆序BST-理解第K大
 * 因为正序：小 -> 大: 左 -> 根 -> 右
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
  // defend
  if (root === null) return null;
  // init data
  let res = null;
  const _kthLargest = (curRoot) => {
      if (curRoot === null) return null;

      // 第K大：需要对BST进行逆序 右 -> 根 -> 左
      _kthLargest(curRoot.right);
      // 注意：这里的k不是下标 - 因为k是从1开始算的，也就是说k倒数到1的时候 就满足了第k个了
      // 这里是k发生变化的地方
      if (--k === 0) {
          res = curRoot.val;
          return
      }
      _kthLargest(curRoot.left);
      
  }
  // algo
  _kthLargest(root);

  // return
  return res;
};