/**
 * leet: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * Date: 2022-2-4
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487126&idx=1&sn=4de13e66397bc35970963c5a1330ce18&scene=21#wechat_redirect
 * 寻找最正统的解法：
 *  - 这里选择官方题解：BFS方法：
 *    - https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/solution/tian-chong-mei-ge-jie-dian-de-xia-yi-ge-you-ce-2-4/
 */


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 方法1： BFS 
 * 使用BFS：进行层序遍历
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  // 防御
  if (root === null) return root;
  // 定义BFS需要的辅助数据结构：队列
  const queue = [root];
  // 开始BFS
  while (queue.length > 0) {
      // 因为队列后面不断有子节点加入 所以 进入一层的时候 记录下当前层元素的个数
      const layerLength = queue.length;
      // 遍历当前这一层
      for (let i = 0; i < layerLength; i++) {
          const cur = queue.shift();

          // 链接左右节点 边界：该层的末尾 是不连接的
          if (i < layerLength - 1) {
              cur.next = queue[0];
          }

          // 不断将下面一层的子节点加入队列
          if (cur.left !== null) {
              queue.push(cur.left);
          }
          if (cur.right !== null) {
              queue.push(cur.right);
          }
      }
  }
  return root;
};



/**
 * *************************************************************************
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 辅助递归函数: 连接2个node
 */
 const connectTwoNode = function(leftNode, rightNode) {
  // base case
  if (leftNode === null || rightNode === null) return null;
  // 链接当前2个node
  leftNode.next = rightNode;
  // 递归调用：链接同一节点的左右子节点
  connectTwoNode(leftNode.left, leftNode.right);
  connectTwoNode(rightNode.left, rightNode.right);
  // 连接跨越父节点的2个子节点
  connectTwoNode(leftNode.right, rightNode.left);
}

/**
* 方法2： 递归法
* @param {Node} root
* @return {Node}
*/
var connect = function(root) {
  // 防御
  if (root === null) return root;
  // 连接
  connectTwoNode(root.left, root.right);
  // 返回值
  return root;
};

module.exports = connect;