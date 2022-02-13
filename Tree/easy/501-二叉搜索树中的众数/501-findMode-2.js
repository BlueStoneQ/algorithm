/**
 * leet: https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
 * Date: 2022-2-13
 * 题解: https://programmercarl.com/0501.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E4%BC%97%E6%95%B0.html#javascript
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
 * 方法1： 用二叉树通用的解决方案 - 需要使用map
 * 方法2： 利用BST的特性进行解决
 * 这里先采用方法1
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findMode = function(root) {
  // 防御
  // 初始化变量
  let res = [];
  const item2CountMap = new Map(); // map: [ val, count ]
  /**
   * 定义：辅助递归函数 （定义在内部 使用闭包）,在递归过程中生成map
   */
  const _findMode = function(curRoot) {
      // base case
      if (curRoot === null) return;
      // 递归左右子树
      _findMode(curRoot.left);
      // 本层逻辑: 更新map值
      const curVal = curRoot.val;
      item2CountMap.set(
          curVal,
          item2CountMap.has(curVal) ? item2CountMap.get(curVal) + 1 : 1,
      );
      _findMode(curRoot.right);
  }
  // 调用辅助递归函数 生成map
  _findMode(root);
  // 处理生成的map 找到数量最多的众数组成的数组
  let maxCount = item2CountMap.get(root.val);
  for (const [val, count] of item2CountMap) {
      // case1 当前值的出现次数和maxCount一致 则当前值进入结果中
      if (count === maxCount) {
          res.push(val);
      }
      // case2 当前值出现次数大于maxCount 则需要更新maxCount 并清空res 将当前值和次数作为最大值
      if (count > maxCount) {
          res = [];
          maxCount = count;
          res.push(val);
      }
  }
  // 返回结果
  return res;
};