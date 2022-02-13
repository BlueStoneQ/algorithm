/**
 * leet: https://leetcode-cn.com/problems/delete-node-in-a-bst/
 * Date: 2022-2-5
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247488128&idx=2&sn=b8fb3fd2917f9ac86127054741cd5877&scene=21#wechat_redirect
 * 主要实现参考：《js数据结构和算法-3版》tree p182 移除一个节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  // 因为头结点也可能命中key 也可能被删 所以 这里要返回新的root
  return  _deleteNode(root, key);
};

/**
* 辅助函数：根据key删除当前子树的节点 并返回当前节点
*/
function _deleteNode(curRoot, key) {
  // base case
  if (curRoot === null) return null;
  // key未命中当前节点 根据BST性质 去不同的子树中查询 并更新当前的左右子树（因为之前的左右子树头结点也可能会被key命中 删掉）
  if (curRoot.val > key) {
      // key小于当前值 去左子树中找
      curRoot.left = _deleteNode(curRoot.left, key);
      return curRoot;
  }
  if (curRoot.val < key) {
      // key小于当前值 去左子树中找
      curRoot.right = _deleteNode(curRoot.right, key);
      return curRoot;
  }
  // key命中当前节点（即：curRoot.val === key） 根据当前节点的情况 分3种case
  // case1：curRoot为叶子节点 则可以直接干掉
  if (curRoot.left === null && curRoot.right === null) {
      curRoot = null;
      return curRoot; // 删除一个节点 肯定是需要父节点操作的 这里通过返回值 父节点会将该返回值赋值到其左/右孩子上
  }
  // case2: curRoot只有一个左节点/右节点
  // 只有左孩子的情况: 将左孩子赋值到当前节点即可 删除当前节点
  if (curRoot.right === null) {
      curRoot = curRoot.left;
      return curRoot;
  }
  // 只有右孩子的情况: 将右孩子赋值到当前节点即可 删除当前节点
  if (curRoot.left === null) {
      curRoot = curRoot.right;
      return curRoot;
  }
  // case3：curRoot既有左节点 也有右节点: 需要找到右子树的最小节点作为当前节点 并删除右子树的最小节点（最小节点 肯定是叶子节点）
  const minNode = _findMinNode(curRoot.right);
  curRoot.right = _deleteNode(curRoot.right, minNode.val);
  curRoot.val = minNode.val; // 这里的赋值 仅限于val域为基础数据类型的情况
  return curRoot;
}

/**
* 辅助函数: 找到当前子树的最小节点 并返回该节点
*/
function _findMinNode(curRoot) {

  let _curRoot = curRoot;

  // BST中找当前root下的子树的最小节点 一路沿着left子树递归而下到叶子节点即可 就是最小节点
  while (_curRoot !== null && _curRoot.left !== null) {
      _curRoot = _curRoot.left;
  }
  return _curRoot;
}


module.exports = deleteNode;