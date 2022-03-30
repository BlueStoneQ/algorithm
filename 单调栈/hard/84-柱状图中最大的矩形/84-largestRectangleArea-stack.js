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

 [√]方法2. 单调栈
 本地单调栈的解法和接雨水的题目是遥相呼应的。
为什么这么说呢，42. 接雨水 (opens new window)是找每个柱子左右两边第一个大于该柱子高度的柱子，而本题是找每个柱子左右两边第一个小于该柱子的柱子。

因为本题是要找每个柱子左右两边第一个小于该柱子的柱子，所以从栈头（元素从栈头弹出）到栈底的顺序应该是从大到小的顺序！

 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // defend
    // init data
    let maxArea = 0;
    // heights = [0, ...heights, 0]; // 首尾加入哨兵 - 用哨兵避免对边界情况的单独处理，降低复杂度
    const heightsLen = heights.length;
    const stack = []; // 需要一个单调递减栈

    // algo
    stack.push(0);
    for (let i = 1; i < heightsLen; i++) {
        const curHeight = heights[i];
        const stackPeekIndex = stack[stack.length - 1];
        // case 1 + 2: 当前高度 >= stack栈顶元素指向的height 符合单调递减 继续入栈
        if (curHeight >= heights[stackPeekIndex]) {
            stack.push(i);
            continue;
        }
        // case3: 当前高度 < stack栈顶元素指向的height 需要出栈 直到栈顶元素小于当前高度 在这个出栈过程中 计算每个出栈元素指向的height作为高度计算的最大连续面积
        // 不断出栈 直到遇到更小的元素 就不能计算了
        while (stack.length > 0 && curHeight < heights[stack[stack.length - 1]]) {
            // 计算当前栈顶的元素指向的高度作为h的面积
            const h = heights[stack.pop()]; 
            // 关于前面加入的哨兵 例如 当i = 1的时候 这里pop后 stack.lenght = 0, 则stack[stack.length - 1] = stack[0 - 1] = stack[-1] = undefined
            const w = i - stack[stack.length - 1] - 1; // right - left - 1
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    // return 
    return maxArea;
};