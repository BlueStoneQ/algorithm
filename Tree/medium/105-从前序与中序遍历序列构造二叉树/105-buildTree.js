/**
 * leet: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Date: 2022-2-5
 * 题解：视频讲得很好的 值得一看，尤其那副图：
 *  - https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487270&idx=1&sn=2f7ad74aabc88b53d94012ceccbe51be&scene=21#wechat_redirect
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  // 防御
  // 确定初始值
  // 构造map [val => inorderIndex]
  const v2InorderIndexMap = new Map();
  inorder.forEach((v, i) => v2InorderIndexMap.set(v, i))
  /**
  * 定义辅助递归函数：根据前后序遍历序列 + 左右序列边界下标 生成一棵二叉树 并返回该二叉树根节点
  * 1. 这里借助闭包 省去一些数据通过入参传递 影响程序的可读性
  * 
  * 其实核心原理画个图就理解：
  * 前序遍历结果： root - leftTree - rightTree
  * 中序遍历结果: leftTree - root - rightTree
  * 核心就是不断计算出每个子树对应的数组的startIndex和endIndex
  * 所以 这个题有解 必须node的val都是唯一的 不同的，这样才能用前序的第一个元素root在中序中分割出左子树和右子树，然后利用左右子树的长度在前序中找出左右子树的边界下标，再将左右子树分别递归处理，不断找到当前的root
  * @param {Number} preorderStart 当前子树的前序遍历序列中的起点
  * @param {Number} preorderEnd 当前子树的前序遍历序列中的终点
  * @param {Number} inorderStart 当前子树的中序遍历序列中的起点
  * @param {Number} inorderEnd 当前子树的中序遍历序列中的终点
  */
  function _buildTree(preorderStart, preorderEnd, inorderStart, inorderEnd) {
      // base case
      if (preorderStart > preorderEnd || inorderStart > inorderEnd) return null;
      // 生成当前根节点
      const curVal = preorder[preorderStart];
      const curNode = new TreeNode(curVal, null, null);
      // 生成递归调用参数: 当前根节点在inorder中的index值
      const curIndexInorder = v2InorderIndexMap.get(curVal);
      const leftTreeLen = curIndexInorder - inorderStart
      // 递归调用 构造子树 （这里参数的调用 希望画下 preorder 和 inorder的左右子树边界对应图）
      const left = _buildTree(
          preorderStart + 1, // preorder中的leftTree
          preorderStart + leftTreeLen, 
          inorderStart, // inorder中的leftTree
          curIndexInorder - 1
          );
      const right = _buildTree(
          preorderStart + leftTreeLen + 1, // preorder中的leftTree
          preorderEnd,
          curIndexInorder + 1, // inorder中的leftTree
          inorderEnd
      );
      // 将构造的左右子树挂在当前节点上
      curNode.left = left;
      curNode.right = right;
      // 返回当前根节点
      return curNode;
  }
  // 调用递归 传入初始边界值
  return _buildTree(0, preorder.length - 1, 0, inorder.length - 1);
};

module.exports = buildTree;