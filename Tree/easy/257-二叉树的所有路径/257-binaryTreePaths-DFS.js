/**
 * leet: https://leetcode-cn.com/problems/binary-tree-paths/submissions/
 * Date: 2022-2-7
 * 题解: https://programmercarl.com/0257.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%89%80%E6%9C%89%E8%B7%AF%E5%BE%84.html
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
 * DFS: 回溯法：自顶向下
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  // 防御
  if (root === null) return [];

  // 初始化变量
  const res = [];

  /**
 * 辅助函数定义：就是从上到下走每一条路径，到达叶子节点后 就证明一条路径走通了，记录到res中
 * 这就是典型的回溯啊，从上到下，走通每一条路径
 */
function _binaryTreePaths(curRoot, parentPath) {
      // base case: 
      if (curRoot === null) return;
      // base case 1: 到达叶子节点
      if (curRoot.left === null && curRoot.right === null) {
          res.push(parentPath + curRoot.val);
          return;
      }

      // 拼接根节点出到当前节点的路径
      const curPath = parentPath + curRoot.val + '->';

      // 递归调用：继续向左右子树 向下遍历
      _binaryTreePaths(curRoot.left, curPath);
      _binaryTreePaths(curRoot.right, curPath);
  }

  // 调用辅助函数
  _binaryTreePaths(root, '');

  return res;
};


/**
 * [推荐]DFS: 回溯 - 枚举路径
 * 模板化的回溯法
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // defend
    if (root === null) return [];
    // init data
    const result = [];

    const _binaryTreePaths = (path, curRoot) => {
        if (curRoot.left === null && curRoot.right === null) {
            // 只在叶子节点收集路径
            result.push(path.join('->'));
            return;
        }

        for (let key of ['left', 'right']) {
            const selectedNode = curRoot[key];
            if (selectedNode === null) {
                continue;
            }
            // 做出选择 
            path.push(selectedNode.val);
            // 回溯
            _binaryTreePaths(path, selectedNode);
            // 撤销选择
            path.pop();
        }
    }
    // algo
    _binaryTreePaths([root.val], root);
    // return
    return result;
};