/**
 * 2022-6-24
 * leet: https://leetcode.cn/problems/subtree-of-another-tree/
 * 题解: https://leetcode.cn/problems/subtree-of-another-tree/solution/dui-cheng-mei-pan-duan-zi-shu-vs-pan-duan-xiang-de/
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
 * 思路：每到一颗子树 都比较下和subRoot这棵树是否一样 
    两棵树是否一样的算法参考：leet: 100
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  // defend
  if (root === null && subRoot === null) return true;
  if (root === null || subRoot === null) return false;
  // init data
  // algo
  if (isSameTree(root, subRoot)) {
      return true;
  }
  // return
  return isSubtree(root.left, subRoot)
      || isSubtree(root.right, subRoot);
};

function isSameTree (tree1, tree2) {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;

  return tree1.val === tree2.val
      && isSameTree(tree1.left, tree2.left)
      && isSameTree(tree1.right, tree2.right);
}