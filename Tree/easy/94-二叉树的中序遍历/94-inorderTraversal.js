/**
 * 迭代法-通用迭代模板：[优先采用]
 * Date: 2022-7-1
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
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  // defend
  // init data
  const result = [];
  const stack = [];
  let lastVisitedNode = new TreeNode(-1); // 准确而言 是上一个出栈的元素（代表已经以该节点为root的子树已经被访问完毕）

  const pushLeftBranch = (curRoot) => {
      while (curRoot !== null) {
          // 前序访问位置：左右孩子还未访问
          stack.push(curRoot);
          curRoot = curRoot.left;
      }
  }
  // algo
  pushLeftBranch(root);

  while (stack.length > 0) {
      const curRoot = stack[stack.length - 1];

      // 左孩子为空 或者 左孩子已经被访问 + 右孩子还未访问
      if ((curRoot.left === null || curRoot.left === lastVisitedNode) && curRoot.right !== lastVisitedNode) {
          // 中序访问位置
          result.push(curRoot.val);

          pushLeftBranch(curRoot.right);
      }

      // 右孩子为空 或者 右孩子已经被访问了
      if (curRoot.right === null || curRoot.right === lastVisitedNode) {
          // 后序访问位置：
          lastVisitedNode = stack.pop();
      }
  }

  // return 
  return result;
};