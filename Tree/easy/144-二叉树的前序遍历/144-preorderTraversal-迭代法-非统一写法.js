/**
 * 2022-6-30
 * leet: https://leetcode.cn/problems/binary-tree-preorder-traversal/
 * kaer: https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html#%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86-%E8%BF%AD%E4%BB%A3%E6%B3%95
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
 * 迭代法：- 非统一写法
 * 根-左-右
 * 1. 最好画一画整个入栈记录+出栈访问的过程，代码只是用栈实现这个过程
 * 2. 非统一写法，会比统一写法更好理解一些，要能够给面试官解释通，但建议最好统一写法也尽量掌握下
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  // defend
  if (root === null) return [];
  // init data
  const result = [];
  const stack = [];
  stack.push(root);
  // algo

  while (stack.length !== 0) {
      const curNode = stack.pop();
      // 前序遍历时机
      result.push(curNode.val);
      if (curNode.right) {
          stack.push(curNode.right); // right先入栈 - 为了实现出栈的时候：left先出栈
      }
      if (curNode.left) {
          stack.push(curNode.left);
      }
  }

  // return 
  return result;
};