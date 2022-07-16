/**
 * leet: https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 迭代法-通用迭代模板：[优先采用]
 * Date: 2022-2-7
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492107&idx=1&sn=3a6cd8ff3150a37ca1b7231e0846cfaa&scene=21#wechat_redirect
 * 
 * 核心思路：
 * 我们递归遍历二叉树的函数也是一样的，当函数被调用时，被压入调用栈，当函数结束时，从调用栈中弹出。
 * 想在迭代代码中体现前中后序遍历，关键点在哪里？
    当我从栈中拿出一个节点p，我应该想办法搞清楚这个节点p左右子树的遍历情况。

    1. 如果p的左右子树都没有被遍历，那么现在对p进行操作就属于前序遍历代码。

    2. 如果p的左子树被遍历过了，而右子树没有被遍历过，那么现在对p进行操作就属于中序遍历代码。

    3. 如果p的左右子树都被遍历过了，那么现在对p进行操作就属于后序遍历代码。

    还有一个思维就是：对待每一个子树（一个节点：root + left + right, 就是二叉树的一个操作单元，所以逻辑都是这个逻辑的不断重复） 你要理解 它的操作就是一个逻辑单元, 就要当成一个树去处理，和所有的树 包括母树是一样的

    其实 我们就是用栈 + 循环 来模拟整个遍历的一个过程

    这个方法是比较好的 统一模版，可以代替递归解决很多实用问题，发挥和递归一样的效用


    本质上就是：你先画个图 走一遍各种序遍历 然后用栈 + 循环 来实现这个过程
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
 * 2. 这可不是层序遍历 - 这个依然是深度优先的遍历，只是这是迭代法实现的，上面是遍历实现的
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  // 防御
  // 定义初始值
  const res = [];
  // 如何判断p的左右子树到底被遍历过没有呢？其实很简单，我们只需要维护一个visited指针，指向「上一次遍历完成的根节点」，就可以判断p的左右子树遍历情况了
  // 记录上一次遍历结束的树的节点,初始值需要和其他树中的值不要冲突，该值主要是辅助程序确定 中序 后序 访问的位置
  // visited指针初始化指向一个新 new 出来的二叉树节点，[!!!]相当于一个特殊值，目的是避免和输入二叉树中的节点重复
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

  // algo
  pushLeftBranch(root);

  // 核心算法: 辅助栈未空 则继续遍历
  while (stack.length > 0) {
      // 出栈 拿到了层层左节点的值 开始对右子树 作同样的push入栈操作
      const curRoot = stack[stack.length - 1];
      // case1: curRoot的左子树遍历完了 但是右子树还未遍历完 (case1 和 case2 条件互斥，一个节点的情况只能是其中一种)
      // curRoot.left === lastVisitedNode 标志着当前栈顶元素的left已经被访问过了 并且 右孩子还未遍历（有一种case: 左右孩子都遍历过了，此刻已遍历指针指向右孩子，left既不为空，也没有被visited指针指向）
      if ((curRoot.left === null || curRoot.left === lastVisitedNode) && curRoot.right !== lastVisitedNode) {
          // 中序遍历位置
          // 去遍历curRoot的右子树 就是不断入栈的过程
          pushLeftBranch(curRoot.right);
      }
      // case2: curRoot的右子树遍历完了, curRoot.right === lastVisitedNode 标志着右孩子也已经被访问了
      if (curRoot.right === null || curRoot.right === lastVisitedNode) {
          // 后续遍历位置
          // 以curRoot为根的子树遍历结束 出栈
          lastVisitedNode = stack.pop();
      }
      // curRoot节点遍历结束
  }

  return res;
};