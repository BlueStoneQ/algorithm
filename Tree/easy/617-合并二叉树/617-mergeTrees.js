/**
 * leet: https://leetcode-cn.com/problems/merge-two-binary-trees/
 * Date: 2022-2-12
 * 题解：https://programmercarl.com/0617.%E5%90%88%E5%B9%B6%E4%BA%8C%E5%8F%89%E6%A0%91.html#javascript
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
  // 防御
  if (root1 === null && root2 === null) return null;
  // 调用辅助递归函数 返回结果
  return _mergeTrees(root1, root2);
};

/**
* 辅助递归函数：将2个子树合并后返回该子树根节点，将Tree2合并到Tree1
* curTree1
* curTree2
* @return TreeNode
*/
function _mergeTrees(curTree1, curTree2) {
  // base case 
  if (curTree1 === null) return curTree2; // 如果t1为空，合并之后就应该是t2
  if (curTree2 === null) return curTree1; // 如果t2为空，合并之后就应该是t1
  // 本层逻辑 以curTree1为基 将curTree2向curTree1上加
  curTree1.val += curTree2.val; // 生成当前节点值

  // 递归生成左右子树
  curTree1.left = _mergeTrees(curTree1.left, curTree2.left);
  curTree1.right = _mergeTrees(curTree1.right, curTree2.right);

  return curTree1;
}