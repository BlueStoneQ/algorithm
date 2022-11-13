/**
 * leet: https://leetcode-cn.com/problems/path-sum-ii/
 * date: 2022-2-12
 * kaer：https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html#javascript
 * 类型：求二叉树属性
 */


/**
 * DFS: 模板化回溯 枚举路径
 *  - 更通用 贴近回溯的模版方法
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    // defend
    if (root === null) return [];
    // init data
    const res = [];
    // algo
    const _pathSum = (path, curRoot, preSum) => {
        if (curRoot === null) return;
        if (preSum === targetSum && curRoot.left === null && curRoot.right === null) {
            res.push(path.slice());
            return;
        }

        for (let key of ['left', 'right']) {
            const selectedNode = curRoot[key];

            if (selectedNode === null) continue;

            path.push(selectedNode.val);

            _pathSum(path, selectedNode, preSum + selectedNode.val);

            path.pop();
        }
    }

    _pathSum([ root.val ], root, root.val);
    // return
    return res;
};


/************************方法2：树的定制化回溯********************* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 所有路径都需要遍历：回溯 + 额外的计数变量
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  // 防御
  if (root === null) return [];
  // 初始化变量
  let res = [];
  /**
   * 定义辅助递归函数
   * @param {TreeNode} curRoot 
   * @param {Number} count 到当前节点距离target的差值
   * @param {Array} path 路径val值从顶到下连成的数组
   * @return 无返回值，因为需要全遍历，其不需要子树的信息传回来
   */
  const _pathSum = function(curRoot, count, path) {
      // base case
      if (curRoot.left === null && curRoot.right === null && count === 0) {
          res.push([...path]); // 不能写res.push(path), 要深拷贝, 引用类型一定要关注深浅拷贝问题
          return;
      };
      if (curRoot.left === null && curRoot.right === null) return;
      // 调用递归函数: 本质为回溯
      if (curRoot.left) {
          path.push(curRoot.left.val); // 改变状态 path
          _pathSum(curRoot.left, count - curRoot.left.val, path);
          path.pop(); // 回溯: 撤销状态 path
      }
      if (curRoot.right) {
          path.push(curRoot.right.val); // 改变状态 path
          _pathSum(curRoot.right, count - curRoot.right.val, path);
          path.pop(); // 撤销状态 path
      }
  }
  // 调用递归
  _pathSum(root, targetSum - root.val, [root.val]);

  return res;
};