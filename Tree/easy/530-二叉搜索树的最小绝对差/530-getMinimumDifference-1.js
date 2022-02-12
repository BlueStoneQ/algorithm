/**
 * leet: https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
 * date: 2022-2-12
 * 题解：https://programmercarl.com/0530.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E7%BB%9D%E5%AF%B9%E5%B7%AE.html#javascript
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
 * 方法1：这里首先采用方法1：先将BST利用中序遍历生成有序数组 然后 对有序数组进行遍历求最小差值
 * 分析：
 * 1. 遇到在二叉搜索树上求什么最值啊，差值之类的，就把它想成在一个有序数组上求最值，求差值，这样就简单多了。
 * 2. 最直观的想法，就是把二叉搜索树转换成有序数组，然后遍历一遍数组，就统计出来最小差值了。
 * @param {TreeNode} root
 * @return 无需返回值
 */
 var getMinimumDifference = function(root) {
  // 防御
  // 初始化变量
  let minAbsDiff = Number.MAX_VALUE;
  const bstArr = [];
  // 定义辅助递归函数
  const _getMinimumDifference = function(curRoot) {
      // base case
      if (curRoot === null) return;

      // 递归左右子树
      _getMinimumDifference(curRoot.left);
      // 本层逻辑：用当前节点和左右节点的最小值 更新最小值
      bstArr.push(curRoot.val);
      _getMinimumDifference(curRoot.right);
  }

  // 调用辅助递归函数 生成bst的中序数组形式
  _getMinimumDifference(root);

  // 遍历有序数组 找到最小的差值
  for (let i = 1; i < bstArr.length; i++) {
      minAbsDiff = Math.min(minAbsDiff, Math.abs(bstArr[i] - bstArr[i - 1]));
  }

  // 返回结果
  return minAbsDiff;
};