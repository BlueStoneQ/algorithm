/**
 * leet: https://leetcode-cn.com/problems/next-greater-element-i/
 * 2022-3-29
 * kaer: https://programmercarl.com/0739.%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 
 单调栈：- 和 739-每日温度几乎如出一辙 但是 能绕一些
 - 单调栈专门解决Next Greater Number

 1. 因为找比当前元素大的元素信息 则选用递增栈 越往栈底 元素越大
 2. 单调栈 - 一般存储的是位置信息 也就是下标信息
 2. 分析当前元素和栈顶元素的大小关系 分3种情况：
    case1: 当前元素 小于 栈顶元素
        - 满足递增关系 当前元素下标入栈
    case2: 当前元素 等于 栈顶元素
        - 根据题意 我们求右边比自己大的元素 而不是等于 所以 这里当前元素下标入栈
    case3: 当前元素 大于 栈顶元素
        - 此时 直接入栈 就不满足单调了，这也是找到右边第一个比自己大的元素
            - 结果 也就在此时进行判断并记录了
                - 核心逻辑：此时栈顶元素在nums2中右面第一个大的元素是nums2[i]即当前遍历元素。
 
   @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
   var nextGreaterElement = function(nums1, nums2) {
    // defend
    // init data
    const nums1Len = nums1.length, nums2Len = nums2.length;
    const ans = new Array(nums1Len).fill(-1);

    // 该map记录的是nums1中每个值 => 该值的下标 (因为num1中无重复元素 可以考虑使用Map 并用值本身作为下标)
    const nums1Map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        nums1Map.set(nums1[i], i);
    }

    const stack = [];
    stack.push(0);
    // algo 从1开始遍历 0已经入栈了 作为栈顶 启动遍历
    for (let i = 1; i < nums2Len; i++) {
        const curNum = nums2[i];
        const stackPeek = stack[stack.length - 1];
        const stackPeekNum = nums2[stackPeek];
        // case1+2：当前元素 小于/等于 栈顶元素
        if (curNum <= stackPeekNum) {
            stack.push(i);
            continue;
        }
        // case3：当前元素 大于 栈顶元素
        // 从栈顶遍历单调栈 直到栈空 或者 当前元素 小于 栈顶元素时 当前元素就可以入栈（循环外）
        while (stack.length > 0 && curNum > nums2[stack[stack.length - 1]]) {
            // 如果当前栈顶元素存在于nums1中 则当前元素就是栈顶元素在nums2中的下一个更大的元素
            const curPeek = stack[stack.length - 1];
            const curPeekNum = nums2[curPeek];
            if (nums1Map.has(curPeekNum)) {
                // 当前栈顶元素 在nums1中的下标
                const curPeekNum1Index = nums1Map.get(curPeekNum);
                // 找到了栈顶元素右边最近的比它大的元素（当前遍历元素） 记录答案
                ans[curPeekNum1Index] = curNum;
            }
            // 栈顶pop - 让当前元素继续沿着栈向下比较
            stack.pop();
        }
        // 在单调栈中终于遇到了比当前元素大的元素 当前元素下标入栈
        stack.push(i);
    }

    // return
    return ans;
};