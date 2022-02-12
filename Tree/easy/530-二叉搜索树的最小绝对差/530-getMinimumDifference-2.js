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
 * 方法2： 在递归中更新最值
 * @param {TreeNode} root
 * @return {number}
 */
 var getMinimumDifference = function(root) {
    // 防御
    // 初始化变量
    let minAbs = Number.MAX_VALUE;
    let preNode = null; // 记录之前的节点 初始值不合法 记住访问要防御

    // 定义递归辅助函数
    const _getMinimumDifference = function(curRoot) {
        // base case
        if (curRoot === null) return;

        // 递归左右子树
        _getMinimumDifference(curRoot.left);
        // 当前层逻辑
        if (preNode !== null) {
            minAbs = Math.min(minAbs, Math.abs(curRoot.val - preNode.val));
        }
        preNode = curRoot;
        _getMinimumDifference(curRoot.right);
    }

    // 调用递归辅助函数
    _getMinimumDifference(root);

    // 返回结果
    return minAbs;
};