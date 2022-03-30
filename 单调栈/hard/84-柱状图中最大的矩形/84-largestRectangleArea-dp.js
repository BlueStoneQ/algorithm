/**
 * leet: https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * 2022-3-30
 * kaer: https://programmercarl.com/0084.%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2.html#%E5%8F%8C%E6%8C%87%E9%92%88%E8%A7%A3%E6%B3%95
 * 暴力解法：会超时-用来理解下思路
 */


/**
 本题和42. 接雨水 (opens new window)，是遥相呼应的两道题目，建议都要仔细做一做，原理上有很多相同的地方，但细节上又有差异，更可以加深对单调栈的理解！

 方法0. 暴力解法
 [√]方法1. 动态规划
 方法2. 单调栈

----------

 [√]方法1. 动态规划
    - 用2个dp数组 先构造记录出：记录每个位置的柱子左右方向第一个小于该柱子高度的下标
        - 其实就是用空间 换了 时间

 * @param {number[]} heights
 * @return {number}
 */
        var largestRectangleArea = function(heights) {
            // defend
            // init data
            const heightsLen = heights.length;
            let maxArea = 0;
            const minLeftIndex = new Array(heightsLen).fill(0);
            const minRightIndex = new Array(heightsLen).fill(0);
        
            // 利用dp的思想 递推构造出数组 该柱子记录着当前i的左侧第一个小于柱子i的柱子的下标
            // 记录每个柱子 左边第一个小于该柱子的下标
            minLeftIndex[0] = -1; // -1 是一个非法边界 0的话 有可能会陷入到下面的while循环中
            for (let i = 1; i < heightsLen; i++) {
                let left = i - 1;
                // 不断向左寻找 这里是沿着dp数组 不断找下一个更小的值
                while (left >= 0 && heights[left] >= heights[i]) left = minLeftIndex[left];
                // 记录到辅助数组中
                minLeftIndex[i] = left;
            }
        
            // 记录每个柱子 右边第一个小于该柱子的下标
            // 为什么要倒序比遍历呢 因为在内循环中我们需要minRight右边的元素 推出现在的元素
            minRightIndex[heightsLen - 1] = heightsLen; // 注意这里初始化 防止下面while死循环
            for (let i = heightsLen - 2; i >= 0; i--) {
                let right = i + 1;
                while (right < heightsLen && heights[right] >= heights[i]) right = minRightIndex[right];
                minRightIndex[i] = right;
             }
            // algo
            for (let i = 0; i < heightsLen; i++) {
                // 当前柱子的面积
                const curArea = (minRightIndex[i] - minLeftIndex[i] - 1) * heights[i]; // w * h
                // 更新最大的面积记录
                maxArea = Math.max(maxArea, curArea);
            }
        
            // return 
            return maxArea;
        };