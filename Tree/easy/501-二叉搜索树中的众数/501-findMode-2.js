/**
 * leet: https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
 * Date: 2022-2-13
 * 题解: https://programmercarl.com/0501.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E4%BC%97%E6%95%B0.html#javascript
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
 * 方法2：利用BST性质 不使用额外空间
 *  - BST可是有序的 有序意味着重复值相邻
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findMode = function(root) {
    // 防御
    if (root === null) return [];
    // 初始化变量 - me:零散的变量最好用一个结构体管理
    let res = [];
    let maxCount = 1;
    let preNode = root; // !!!关键：记录上一个被遍历的节点，以做到相邻节点的比较-BST常用的方法
    let count = 0;
    // 定义：辅助定义函数，该函数递归遍历整棵树，在遍历过程中不断更新res和maxCount
    const _findMode = function(curRoot) {
        // base case
        if (curRoot === null) return;
        // 递归左右子树
        _findMode(curRoot.left);
        // 当前层逻辑: 在中序遍历中 - 保证有序 在有序数组中 重复元素刚好相邻
        if (curRoot.val === preNode.val) {
            // 当前节点和上一个节点相同
            count++;
        } else {
            // 当前节点和上一个节点不同 则开始新一轮计数
            count = 1;
        }
        // 更新preCode
        preNode = curRoot;

        // case1 当前值的cout和maxCount一样 则该值暂时进入res
        if (count === maxCount) {
            res.push(curRoot.val);
        }
        // case2 当前值的count大于maxCount 则更新res和maxCount
        if (count > maxCount) {
            maxCount = count;
            res = [];
            res.push(curRoot.val);
        }

        _findMode(curRoot.right);
    }
    // 调用辅助递归函数
    _findMode(root);
    // 返回结果
    return res;
};