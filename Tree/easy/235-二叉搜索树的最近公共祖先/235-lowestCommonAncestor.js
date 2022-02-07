/**
 * leet: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Date: 2022-2-7
 * 题解：[笨猪爆破组](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 方法1：递归法
 * 定义递归函数：返回以root为根节点的tree的p q 节点的最近公共祖先节点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  // case1: 当前节点大于 p q的值 则 p q都在当前root的左子树中 只需要遍历左子树即可
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  // case2: 当前节点小于 p q的值 则 p q都在当前root的右子树中 只需要遍历右子树即可
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  // case3: 返回当前节点
      // case 3.1 p.val > root.val > q.val, 或者 p q位置互换，此时，左右p q分别在root的左右子树中 root自然是p q的最近公共祖先 返回root
      // case 3.2 p.val === root.val 此时，q不论是在root的左子树 还是 右子树，root都是p q的公共节点
      // case 3.3 q.val === root.val 和 case3.2一样 调换下p q 位置
  return root;
};