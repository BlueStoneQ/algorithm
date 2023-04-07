/**
 * leet: https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/
 * 2022-3-8
 * BFS方法
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485134&idx=1&sn=fd345f8a93dc4444bcc65c57bb46fc35&scene=21#wechat_redirect
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
 * BFS: 层序遍历
 * 更优的解法 不用遍历整棵树：从root向下执行 找到第一个叶子节点 就是最小深度
 *  - 时间复杂度和DFS是一样的：都是O(n), 但实际情况肯定好于此
 * - BFS 可以找到最短距离，但是空间复杂度高，而 DFS 的空间复杂度较低。
 *  - 分析：
 *  1. 节点总数为N，对于 DFS 算法来说，空间复杂度无非就是递归堆栈，最坏情况下顶多就是树的高度，也就是O(logN)。
 *  2. BFS 算法，队列中每次都会储存着二叉树一层的节点，这样的话最坏情况下空间复杂度应该是树的最底层节点的数量，也就是N/2，用 Big O 表示的话也就是O(N)
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
  // defend
  if (root === null) return 0;
  // init data
  let depth = 0;
  const queue = []; // BFS辅助用数据结构
  queue.push(root); // 初始化queue

  // algo
  while (queue.length !== 0) {
      // 拿到当前层的size 因为下面会将下一层push进来 size会改变 所以这里要记录一下 确保遍历得是一层
      const curSize = queue.length;
      // 记录最小深度
      depth++;

      for (let i = 0; i < curSize; i++) {
          // 拿到当前node节点 + shift当前node节点
          const curNode = queue.shift();
          // 首次到达叶子节点 就是找到了最小深度 可以退出了
          if (curNode.left === null && curNode.right === null) {
            return depth;
          }
          // 将当前节点的子节点push进队列（这样一个for循环后 整个下一层节点全部进入队列了）
          if (curNode.left !== null) queue.push(curNode.left);
          if (curNode.right !== null) queue.push(curNode.right);
      }    
  }

  // return 
  return depth;
};