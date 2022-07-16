/**
 * leet: https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * Date: 2022-7-16
 * 代码随想录：https://programmercarl.com/0513.%E6%89%BE%E6%A0%91%E5%B7%A6%E4%B8%8B%E8%A7%92%E7%9A%84%E5%80%BC.html#%E9%80%92%E5%BD%92
 * 类型：二叉树属性
 * 我的题解：https://leetcode.cn/problems/find-bottom-left-tree-value/comments/1655853
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法2：BFS
    - BFS-更清晰优雅
    - 确定好终止条件
    - 每一层的第一个元素 不断更新
 * @param {TreeNode} root
 * @return {number}
 */
    var findBottomLeftValue = function(root) {
        // defend
        // init data
        let res = null;
        const queue = [];
        queue.push(root);
        // algo
        while (queue.length > 0) {
            const layerSize = queue.length;
            // 用每一层的第一个元素 不断更新res
            res = queue[0].val;
            for (let i = 0; i < layerSize; i++) {
                const curNode = queue.shift();
                if (curNode.left) {
                    queue.push(curNode.left);
                }
    
                if (curNode.right) {
                    queue.push(curNode.right);
                }
            }
        }
        // return
        return res;
    };