/**
 * 迭代法-通用迭代模板：
 * Date: 2022-2-7
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492107&idx=1&sn=3a6cd8ff3150a37ca1b7231e0846cfaa&scene=21#wechat_redirect
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
 * 迭代法：
 * 1. 本质就是用栈模拟递归
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  // 防御
  // 定义初始值
  const res = [];
  // 记录上一次遍历结束的树的节点,初始值需要和其他树中的值不要冲突，该值主要是辅助程序确定 中序 后序 访问的位置
  let lastVisitedNode = new TreeNode(-1);
  // 辅助数据结构 栈：模拟递归，栈来模拟递归，其实就是用来按照层级记录每一层递归的信息，而出栈顺序刚好符合递归结束的顺序特点
  const stack = [];

  /**
   * 将左子树持续入栈
   */
  const pushLeftBranch = function(curRoot) {
      // 入栈左节点 对应递归中的traverse(root.left)
      while (curRoot !== null) {
          // 前序遍历位置
          res.push(curRoot.val);

          stack.push(curRoot);
          curRoot = curRoot.left;
      }
  }

  pushLeftBranch(root);

  // 核心算法: 辅助栈未空 则继续遍历
  while (stack.length > 0) {
      // 出栈 拿到了层层左节点的值 开始对右子树 作同样的push入栈操作
      const curRoot = stack[stack.length - 1];
      // curRoot的左子树遍历完了 但是右子树还未遍历完
      if ((curRoot.left === null || curRoot.left === lastVisitedNode) && curRoot.right !== lastVisitedNode) {
          // 中序遍历位置
          // 去遍历curRoot的右子树 就是不断入栈的过程
          pushLeftBranch(curRoot.right);
      }
      // curRoot的右子树遍历完了 
      if (curRoot.right === null || curRoot.right === lastVisitedNode) {
          // 后续遍历位置
          // 以curRoot为根的子树遍历结束 出栈
          lastVisitedNode = stack.pop();
      }
      // curRoot节点遍历结束
  }

  return res;
};