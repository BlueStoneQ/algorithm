/**
 * leet: https://leetcode-cn.com/problems/trim-a-binary-search-tree/
 * Date: 2022-2-13
 * 题解: https://programmercarl.com/0669.%E4%BF%AE%E5%89%AA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95
 * 类型：BST属性+操作
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
 * 递归法 + 返回根节点 + 父节点替换删除
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBST = function(root, low, high) {
  // 防御
  if (root === null) return root;
  // 初始化变量
  /**
   * 定义：辅助递归函数
   * @param curRoot 当前子树根节点
   * @return 修剪后的二叉树的根节点 
   */
  const _trimBST = function(curRoot) {
      // base case
      if (curRoot === null) return null;
      // 区间问题 根据当前值和区间关系 分几种区间case讨论
      // case1 当前值在区间外
      // case1-1 当前值小于low 则需要遍历当前值的右子树 并将右子树根节点返回给上层 父层替换当前根节点（该节点也就自然被删除了）
      if (curRoot.val < low) {
          const right = _trimBST(curRoot.right);
          return right;
      }
      // case1-2 当前值大于high 则需要遍历当前值的左子树 并将左子树根节点返回给上层 父层替换当前根节点
      if (curRoot.val > high) {
          const left = _trimBST(curRoot.left);
          return left;
      }
      // case2 当前值在区间内 这里相当于给左右子树换上新节点(删除不在区间内的节点 其实就在这一步，利用返回根节点+父节点挂载来删除不合规的节点)
      curRoot.left = _trimBST(curRoot.left);
      curRoot.right = _trimBST(curRoot.right);

      return curRoot;
  }
  // 调用辅助递归函数 返回结果
  return _trimBST(root);
};