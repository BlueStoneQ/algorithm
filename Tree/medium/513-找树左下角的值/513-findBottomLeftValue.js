/**
 * leet: https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * Date: 2022-2-8
 * 代码随想录：https://programmercarl.com/0513.%E6%89%BE%E6%A0%91%E5%B7%A6%E4%B8%8B%E8%A7%92%E7%9A%84%E5%80%BC.html#%E9%80%92%E5%BD%92
 * 类型：二叉树属性
 * 我的题解：https://leetcode-cn.com/problems/find-bottom-left-tree-value/comments/1369409
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
 * 方法2：为准：BFS：不断更新对每一层第一个节点的记录即可
 */
const findBottomLeftValue1 = function(root) {
    // defend
    if (root === null) return 0;
    if (root.left === null && root.right === null) return root.val; // 单节点返回当前值
    // init data
    let result = 0; // 求最大值，用一个小值以便于启动比较更新
    const queue = [];
    queue.push(root);
    // algo
    while (queue.length > 0) {
        const layerLen = queue.length;
        // 遍历当前层
        for (let i = 0; i < layerLen; i++) {
            const curNode = queue.shift();
            // 记录当前层的第一个值
            if (i === 0) {
                result = curNode.val;
            }
            if (curNode.left) {
                queue.push(curNode.left);
            }
            if (curNode.right) {
                queue.push(curNode.right);
            }
        }
    }
    // return
    return result;
}


/**
 * 递归法
 * @param {TreeNode} root
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
  // 防御
  if (root === null) return 0;
  if (root.left === null && root.right === null) return root.val; // 单节点返回当前值

  // 初始化变量
  let maxLeftVal = 0;
  let maxDepth = Number.MIN_VALUE; // 规定root的深度为0
  /**
   * 辅助递归函数定义: 遍历整棵树 在遍历过程中不断更新maxLeftVal maxDepth
   * 那么如果找最左边的呢？可以使用前序遍历，这样才先优先左边搜索，然后记录深度最大的叶子节点，此时就是树的最后一行最左边的值。
   * @param {} curRoot 当前子树根节点
   * @param {Number} 当前子树的深度 层层传递下去累加计算下一层子树深度
   * @return {} void 无需返回值
   */ 
  const _findBottomLeftValue = function(curRoot, parentDepth) {
      // base case1
      if (curRoot === null) return;
      const curDepth = parentDepth + 1;
      // base case2 叶子节点
      if (curRoot.left === null && curRoot.right === null) {
          // 如果深度大于最大深度 更新记录值
          // 因为最左边的值更新后 同层的节点的curDepth都和前面的最左边的节点一致 就不会更新 - 也就是一层 只在第一个节点那里更新一次
          if (curDepth > maxDepth) {
              maxDepth = curDepth;
              maxLeftVal = curRoot.val;
          }
          // 结束该层逻辑
          return;
      }

      // 本层逻辑
      _findBottomLeftValue(curRoot.left, curDepth);
      _findBottomLeftValue(curRoot.right, curDepth);
  }
  // 调用辅助递归函数 传入初始值
  _findBottomLeftValue(root, 0);

  // 返回结果
  return maxLeftVal;
};