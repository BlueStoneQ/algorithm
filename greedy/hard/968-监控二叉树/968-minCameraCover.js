/**
 * leet: https://leetcode-cn.com/problems/binary-tree-cameras/
 * 2022-3-28
 * kaer: https://programmercarl.com/0968.%E7%9B%91%E6%8E%A7%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E6%80%9D%E8%B7%AF
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

贪心-局部最优考虑-从叶子节点开始遍历
 贪心：遍历方向：从叶子节点开始遍历 - 在叶子节点的父节点开始安装摄像头，这样省略的摄像头 比 根节点多 
 把摄像头放在叶子节点的父节点位置，才能充分利用摄像头的覆盖面积。
那么有同学可能问了，为什么不从头结点开始看起呢，为啥要从叶子节点看呢？
因为头结点放不放摄像头也就省下一个摄像头， 叶子节点放不放摄像头省下了的摄像头数量是指数阶别的。
所以我们要从下往上看，局部最优：让叶子节点的父节点安摄像头，所用摄像头最少，整体最优：全部摄像头数量所用最少！
局部最优推出全局最优，找不出反例，那么就按照贪心来！

 节点状态：
 0 - 该节点无覆盖 
 1 - 该节点有摄像头
 2 - 该节点有覆盖

 采用后续遍历 能够获取左右子节点的状态 然后来判断当前节点应该的状态
 这样 递归遍历函数的返回值 就是遍历节点的状态值

 梳理每个节点的几种情况：
 1. 左右子节点都有覆盖 -- 当前节点应该就是无覆盖状态
 2. 左右节点至少有一个无覆盖的情况 - 当前节点需要放置摄像头
 3. 左右节点只要有一个摄像头 - 当前节点为覆盖状态
 4. 如果根节点没有覆盖 则需要再root上也安装一个摄像头

 * @param {TreeNode} root
 * @return {number}
 */
 var minCameraCover = function(root) {
  // defend
  // init data
  const NODE_STATE = {
      NO_COVER: 0,  // 0 - 该节点无覆盖 
      SET_CAMERA: 1, // 1 - 该节点有摄像头
      COVER: 2, // 2 - 该节点有覆盖
  }

  let cameraCount = 0;
  /**
   * 定义：Tree递归遍历函数, 返回curRoot应该的状态
   * @return {Number} 状态
   */
  const traverse = function(curRoot) {
      // base case
      if (curRoot === null) return NODE_STATE.COVER; // 空节点， 不需要被覆盖，不需要父节点消耗摄像头，所以和被覆盖是一种逻辑效果 故看做覆盖状态

      // 遍历左右子节点
      const left = traverse(curRoot.left);
      const right = traverse(curRoot.right);

      // 根据各种case return 
      // 1. 左右子节点都有覆盖 -- 当前节点应该就是无覆盖状态
      if (left === NODE_STATE.COVER && right === NODE_STATE.COVER) {
          return NODE_STATE.NO_COVER;
      }

      // 2. 左右节点至少有一个无覆盖的情况 - 当前节点需要放置摄像头 此时 我们的摄像头计数器 + 1
      if (left === NODE_STATE.NO_COVER || right === NODE_STATE.NO_COVER) {
          cameraCount++;
          return NODE_STATE.SET_CAMERA;
      }

      // 3. 左右节点只要有一个摄像头 - 当前节点为覆盖状态
      if (left === NODE_STATE.SET_CAMERA || right === NODE_STATE.SET_CAMERA) {
          return NODE_STATE.COVER;
      }
  }
  // algo
  // 4. 如果根节点没有覆盖 则需要再root上也安装一个摄像头
  if(traverse(root) === NODE_STATE.NO_COVER) {
      cameraCount++;
  }

  // return
  return cameraCount;
};