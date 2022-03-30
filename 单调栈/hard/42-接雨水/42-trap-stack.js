/**
 * leet: https://leetcode-cn.com/problems/trapping-rain-water/
 * 2022-3-30
 * kaer: https://programmercarl.com/0042.%E6%8E%A5%E9%9B%A8%E6%B0%B4.html#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%A7%A3%E6%B3%95
 * 官网视频讲得很好：https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode-solution-tuvc/
 */

/**
 * 

方法0： 直觉-双指针按单列计算 时间：O(n^2) [了解即可-时间复杂度不优异]
        - 在内层遍历中 向2边寻找2边的最稿列，取左右最高列的min值 与 当前柱子的差值 作为h, 当前列宽度恒定为1： 则当前柱的能接雨水：h * 1
        - 双层遍历 时间复杂度不优异 能理解即可 即每一遍循环 都内循环招待当前柱子的左右最高柱子高度值

方法1：双指针 
        - 时间O(n) - 推荐，时间复杂度更优异，并且空间复杂度只有O(1) - 因为只有2个左右指针
        - 可以参考官方题解的双指针方法 视频讲解的比较清楚
        - 当前柱子可以形成”低洼“，就可以积水

方法2：动态规划
    - 其实是在方法1.1的基础上 利用DP：构造出每个柱子左侧最高柱子高度dp数组 + 右侧最高柱子dp数组
        - 这样的话 就不用再内层再做一次循环朝两边找最高的柱子 直接使用2个dp数组 通过下标 就能找到当前柱子的左右侧最高柱子高度 就是用空间换了时间

[√]方法3：单调栈 O(n) - 因为只遍历了height[]一次
    - 可以套用单调栈的解决方案模板 内外双层遍历 外层遍历height[], 内层用循环访问单调栈
    - 单调栈是按照行方向计算雨水的
    - 单调递增栈
    - 因为一旦发现添加的柱子高度大于栈头元素了，此时就出现凹槽了，栈头元素就是凹槽底部的柱子，栈头第二个元素就是凹槽左边的柱子，而添加的元素就是凹槽右边的柱子。
    - 可以画个图
    - 栈内存储height中柱子的下标即可，按照单调递增的顺序

------------------------------------
 
 这里 我们采用方法3: 单调栈

 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    // defend
    const heightLen = height.length;
    if (heightLen < 3) return 0; // 小于3个柱子 无法形成低洼
    // init data
    let result = 0;
    const stack = []; // 单调递增栈 - 存的是下标

    // algo
    stack.push(0); 
    for (let i = 1; i < heightLen; i++) {
        const curHeight = height[i];
        const stackPeek = stack[stack.length - 1]; // 栈顶的值 - 下标
        const stackPeekHeight = height[stackPeek]; // 栈顶值-下标 对应的高度
        // case 1+2: 当前高度 小于 等于 当前栈顶的高度
        if (curHeight <= stackPeekHeight) {
            stack.push(i);
            continue;
        }

        // case3：当前高度 大于 当前栈顶的高度, 则计算出所有低于当前柱子高度的栈顶柱子的低洼面积 - 直到出栈到比当前更大的柱子
        while (stack.length > 0 && curHeight > height[stack[stack.length - 1]]) {
            // 计算面积 需要分别得到h * w
            const mid = stack.pop(); // 栈顶存储的下标（也就是我们要计算的柱子的面积）
            if (stack.length > 0) {
                // 栈不为空的时候 就代表还没到边界 可以找到接下来的栈顶作为高度
                const h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid];
                const w = i - stack[stack.length - 1] - 1; // 注意减一 只求中间宽度
                result += h * w;
            }
        }

        stack.push(i);
    }

    // return 
    return result;
};