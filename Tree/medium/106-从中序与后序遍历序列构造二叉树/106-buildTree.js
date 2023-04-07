/**
 * leet: https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * Date: 2022-2-5
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  // 防御
  // 初始化值: Map: [val => inorderIndex]
  const val2InorderIndexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    val2InorderIndexMap.set(inorder[i], i);
  }
  // 定义辅助递归遍历函数
  /* 定义辅助递归函数：根据前后序遍历序列 + 左右序列边界下标 生成一棵二叉树 并返回该二叉树根节点
  * 1. 这里借助闭包 省去一些数据通过入参传递 影响程序的可读性
  * 其实核心原理画个图就理解：
  * 后序遍历结果： leftTree - rightTree - root
  * 中序遍历结果: leftTree - root - rightTree
  * 所以 这个题有解 必须node的val都是唯一的 不同的，这样才能用后续的最后一个元素root在中序中分割出左子树和右子树，然后利用左右子树的长度在前序中找出左右子树的边界下标，再将左右子树分别递归处理，不断找到当前的root

  * @param {Number} postorderStart 当前子树的后序遍历序列中的起点
  * @param {Number} postorderEnd 当前子树的后序遍历序列中的终点
  * @param {Number} inorderStart 当前子树的中序遍历序列中的起点
  * @param {Number} inorderEnd 当前子树的中序遍历序列中的终点
  */
  const _buildTree = function(postorderStart, postorderEnd, inorderStart, inorderEnd) {
      // base case
      if (postorderStart > postorderEnd || inorderStart > inorderEnd) return null;
      // 找到当前树根节点(!!!当前树的post序列的最后一位，不是整个序列的最后一位哦)
      const curRootVal = postorder[postorderEnd];
      const curRootInIndex = val2InorderIndexMap.get(curRootVal); // 在中序遍历中的下标
      const leftTreeLen = curRootInIndex - inorderStart
      // 生成当前根节点
      const curRoot = new TreeNode(curRootVal, null, null);
      // 调用递归 生成左右子树
      const left = _buildTree(
          postorderStart,
          postorderStart + leftTreeLen - 1,
          inorderStart,
          curRootInIndex - 1,
      );
      const right = _buildTree(
          postorderStart + leftTreeLen,
          postorderEnd - 1,
          curRootInIndex + 1,
          inorderEnd
      );
      // 挂载左右子树到当前节点
      curRoot.left = left;
      curRoot.right = right;
      // 返回当前节点
      return curRoot;
  }
  // 调用递归 传入起始参数
  return _buildTree(0, postorder.length - 1, 0, inorder.length - 1);
};