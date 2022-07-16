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
  - 满二叉树节点数 = 2^k - 1  
    - k: 层数
  - !!!满二叉树：左右子树层数/高度一致
  时间复杂度：O(log n × log n)
    - !!!这里的logn * logn = 一共遍历logn层，每层通过while循环获得height，就是获得层数，操作数是logn，所以就是：logn * logn
    - 其实：最好的时间复杂度是这个 O(logN) 也就是本身就是满二叉树，那么获得leftHeight 和 rightHeight的操作步骤 就是层级，也就是logN
  空间复杂度：O(log n)
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

    // 判定满二叉树：左右子树的层数一致(这棵树的沿着左侧边 右侧边 - 如果2个边相等，也就是说右侧也有节点) - 则完全二叉树此时必然是满二叉树
    if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;

    // 递归调用 左右子树节点和 + 1
    return countNodes(root.left) + countNodes(root.right) + 1;
};