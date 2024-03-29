/**
 * leet: https://leetcode-cn.com/problems/path-sum/
 * 题解：https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html#%E9%80%92%E5%BD%92
 * 类型： 求二叉树属性
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
 * 方法1： 模板化回溯
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  // init data
  if (root === null) return false;

  const _binaryTreePaths = (curRoot, preSum) => {
      if (curRoot.left === null && curRoot.right === null) {
        // 只在叶子节点收集路径
        if (preSum === targetSum) return true
        return false
      }

      for (let key of ['left', 'right']) {
          const selectedNode = curRoot[key];
          // 这里其实代替了下一层的base case: if (curRoot === null) return
          if (selectedNode === null) {
              continue;
          }
          // 回溯
          const res = _binaryTreePaths(selectedNode, preSum + selectedNode.val);
          if (res === true) return res; // 短路：找到等于targetSum的路径 即可返回true
      }
  }

  // 注意这里的第二个入参
  return !!_binaryTreePaths(root, root.val);
};

/**
 * 迭代：回溯
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  // 防御
  if (root === null) return false;
  // 调用辅助函数 传入初始值
  return _hasPathSum(root, targetSum - root.val);
};

/**
  * 辅助递归函数当前这条路径下 节点的值 是否等于targetSum
  * @param curRoot 当前子树根节点
  * @param count targetSum - curRoot.val, 倒向计数法
  * @return {bool} true, 能找到节点和等于targetSum的路径
  */
function _hasPathSum(curRoot, count) {
  // base case 到达叶子节点
  if (curRoot.left === null && curRoot.right === null && count === 0) return true; // 该条路径之和满足targetSum
  if (curRoot.left === null && curRoot.right === null) return false; // 到达叶子节点 = 这条路径走通了，但是路径和不满足targetSum

  // 本层逻辑 递归左右子树：这里本质上是一个回溯，另外保证传入的是叶子节点 不要传入空节点
  if (curRoot.left) {
      // 这里只需要找到一条路径即可 因此 需要返回值，在返回值===true时 证明找到该路径 递归可以返回结束
      if (_hasPathSum(curRoot.left, count - curRoot.left.val)) return true; // 这里的回溯 状态不需要撤销是因为这里的count值没有改变 传入的是表达式 count - curRoot.left.val
  }

  if (curRoot.right) {
      if (_hasPathSum(curRoot.right, count - curRoot.right.val)) return true;
  } 
  
  // 左右子树都没找到满足路径和 === targetSum的路径 自然返回false
  return false;
}