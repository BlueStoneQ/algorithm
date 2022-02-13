/**
 * leet: https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 * Date: 2022-2-13
 * 题解：https://programmercarl.com/0108.%E5%B0%86%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html#javascript
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
 * 平衡的关键：从有序数组的中间取值，不断用中间值构造节点 返回给父节点 父节点挂载在左右子树位置上
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  // 防御 
  if (nums.length === 0) return null;
  /**
   * 定义辅助递归函数: 使用[left, right]区间构造BST 并返回根节点
   */
  const _sortedArrayToBST = function(left, right) {
      // base case: 
      if (left > right) return null;
      // 本层逻辑：分割区间（产生新边界）作为参数 + 递归生成左右子树 挂载到当前节点 并返回当前节点
      // 找到当前区间中点 并构造出当前节点
      const mid = Math.floor(left + (right - left) / 2);
      
      const curRoot = new TreeNode(nums[mid]);
      curRoot.left = _sortedArrayToBST(left, mid - 1);
      curRoot.right = _sortedArrayToBST(mid + 1, right);

      return curRoot;
  }
  // 调用辅助递归函数 在调用traversal的时候为什么传入的left和right为什么是0和nums.size() - 1，因为定义的区间为左闭右闭。
  return _sortedArrayToBST(0, nums.length - 1);
}