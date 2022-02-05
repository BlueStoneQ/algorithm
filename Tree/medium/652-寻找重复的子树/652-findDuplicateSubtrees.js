/**
 * leet: https://leetcode-cn.com/problems/find-duplicate-subtrees/
 * Date: 2022-2-5
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487527&idx=1&sn=9cf2b0d8608ba26ea7c6a5c9b41d05a1&scene=21#wechat_redirect
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
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
  // 防御
  // 初始化变量
  let res = [];
  // 查重表：这里使用Map 需要记每个子树的序列出现的次数 超过2次的 后面就不记入结果了 只返回其中一个
  const map = new Map();
  // 定义递归函数: 生成当前传入节点的树的后续序列化 （什么序列化不重要，重要的是可以唯一标识一棵树）
  const _traverse = function(curRoot) {
      // base case
      if (curRoot === null) return '#';
      // 生成当前root节点左右子树的序列化
      const leftSerialization = _traverse(curRoot.left);
      const rightSerialization = _traverse(curRoot.right);
      // 生成当前树序列化
      const curSerialization = leftSerialization + ',' + rightSerialization + ',' + curRoot.val;
      // 序列化查重
      const preCount = map.get(curSerialization);
      if (preCount === 1) {
          res.push(curRoot)
      }
      // 序列化加入查重表
      map.set(curSerialization, (preCount || 0) + 1);
      // 返回当前子树序列化
      return curSerialization;
  }
  // 递归调用
  _traverse(root);
  // 返回结果
  return res;
};

module.exports = findDuplicateSubtrees;