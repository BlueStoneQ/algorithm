/**
 * leet: https://leetcode-cn.com/problems/count-complete-tree-nodes/submissions/
 * Date: 2022-2-7
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485057&idx=1&sn=45a3b89a4efef236cb662d5505d7ce36&scene=21#wechat_redirect
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
 * 充分利用满二叉树的性质减少运算：
  - 满二叉树节点数 = 2^层数k - 1
  - 满二叉树：左右子树层数/高度一致
* @param {TreeNode} root
* @return {number}
*/
  var countNodes = function(root) {
    // 防御
    if (root === 0) return 0;

    // 初始化变量 
    let leftRoot = root, rightRoot = root;

    // 判定当前树是否为满二叉树 满二叉树 则使用2^k-1来计算
    //得到左右子树的层数
    let leftHeight = 0;
    while (leftRoot !== null) {
        leftRoot = leftRoot.left;
        leftHeight++;
    }

    let rightHeight = 0;
    while (rightRoot !== null) {
        rightRoot = rightRoot.right;
        rightHeight++;
    }

    // 判定满二叉树：左右子树的层数一致 - 则完全二叉树此时必然是满二叉树
    if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;

    // 递归调用 左右子树节点和 + 1
    return countNodes(root.left) + countNodes(root.right) + 1;
};