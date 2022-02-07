/**
 * leet: https://leetcode-cn.com/problems/symmetric-tree/
 * Date: 2022-2-7
 * 题解：https://leetcode-cn.com/problems/symmetric-tree/solution/101-dui-cheng-er-cha-shu-di-gui-fa-die-dai-fa-xian/
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
 * 迭代法：借助queue 或者 stack 都可以 需要按照相邻关系存储2个要做比较的树, 这里的quque不是用来层序遍历的
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  // 防御
  if (root === null) return false;
  // 初始化变量
  let quque = [];
  quque.push(root.left);
  quque.push(root.right);
  // 核心算法
  while (quque.length > 0) {
      // 取出当前要比较的2个树
      const tree1 = quque.shift();
      const tree2 = quque.shift();
      // 比较 过滤反向case
      if (tree1 === null && tree2 === null) continue;
      if (tree1 === null || tree2 === null || tree1.val !== tree2.val) return false;
      // 将子树加入到quque中 进行下一轮的比较（需要比较的2个子树按照相邻的原则push进queue）
      quque.push(tree1.left);
      quque.push(tree2.right);
      quque.push(tree1.right);
      quque.push(tree2.left);
  }
  // 返回值: while循环排除法：遇到不合法 return false; 整个while循环走完 没有触发return false; 则证明通过了所有反向case的考验
  return true;
};