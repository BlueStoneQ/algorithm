/**
 * leet: https://leetcode-cn.com/problems/diameter-of-binary-tree/
 * Date: 2022-2-4
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494655&idx=1&sn=f3445112d7322ea8491073fd2d19f25c&scene=21#wechat_redirect
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
 * ⭕️每一条二叉树的「直径」长度就是一个节点的左右子树的最大深度之和
 * 这里的处理框架: 本质上是一个DFS处理框架
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
  // 初始化变量
  let maxDiameter = 0;
  // 定义辅助遍历函数
  const _traverse = function(curNode) {
      // base case
      if (curNode === null) return 0;
      // 递归调用
      const leftTreeDepth = _traverse(curNode.left);
      const rightTreeDepth = _traverse(curNode.right);
      const curDiameter = leftTreeDepth + rightTreeDepth;
      // 更新最值
      maxDiameter = Math.max(curDiameter, maxDiameter);

      return Math.max(leftTreeDepth, rightTreeDepth) + 1;
  }
  // 调用辅助遍历函数
  _traverse(root);
  // 返回结果
  return maxDiameter;
};