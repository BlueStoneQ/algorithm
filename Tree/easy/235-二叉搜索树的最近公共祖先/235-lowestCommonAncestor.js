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
  // 这个防御是必须要做的 因为下面有 root.val的访问 
  if (root === null) return null;
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

/** *************************************************** */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 方法2：迭代法
 * - 迭代法：就是通过root指针的转移 来进行遍历
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  // while 开启迭代 break条件：1. 当root为null时（没找到，或者该树为空树）2. 找到了最近公共祖先，循环体内部break
  while (root) {
      if (p.val < root.val && q.val < root.val) {
          // p q 在左子树 去遍历左子树
          root = root.left;
      } else if (p.val > root.val && q.val > root.val) {
          // p q 在右子树 去遍历右子树
          root = root.right;
      } else {
          // p q 分别在 左右子树 或者 其中一个在当前节点 则当前节点root就是最近公共祖先 break
          break;
      }
  }
  return root;
};