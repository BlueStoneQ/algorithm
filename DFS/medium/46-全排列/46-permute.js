/**
 * leet: https://leetcode-cn.com/problems/permutations/
 * 2022-2-28
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484709&idx=1&sn=1c24a5c41a5a255000532e83f38f2ce4&scene=21#wechat_redirect
 * kaer: https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html
 */

/**
 * DFS-排列去重-树枝去重-采用辅助数据结构-数组优先
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    // defend
    // init data
    const res = [];
    const numsLen = nums.length;
    /**
    * 辅助递归函数: 遍历一棵多叉树（决策树）
    * @param {array} usedArry 下标是数字，value是标记该值是否使用过，true代表使用过
    */
    function _permute(path, usedArray) {
        // base case: 选择列表为空 此时一个路径已经被穷举到头了
        if (path.length === numsLen) {
            res.push(path.slice()); // 由于是引用类型 这里必须拷贝一个path 要不然后面的操作会污染到这里的res中的引用
            return;
        }
        // 递归
        for (let i = 0; i < nums.length; i++) {
            // 对于已经选择过的进行跳过
            if (usedArray[i] === true) continue;
            // 作选择
            path.push(nums[i]);
            usedArray[i] = true;
            // 递归到下一层
            _permute(path, usedArray);
            // 撤销选择
            path.pop();
            usedArray[i] = false;
        }
    }

    // algo
    _permute([], []);

    return res;
};