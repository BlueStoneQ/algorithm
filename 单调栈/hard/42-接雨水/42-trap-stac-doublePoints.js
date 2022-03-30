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

[√]方法1：双指针 
        - 时间O(n) - 推荐，时间复杂度更优异，并且空间复杂度只有O(1) - 因为只有2个左右指针
        - 可以参考官方题解的双指针方法 视频讲解的比较清楚
        - 当前柱子可以形成”低洼“，就可以积水
方法2：动态规划
    - 其实是在方法1.1的基础上 利用DP：构造出每个柱子左侧最高柱子高度dp数组 + 右侧最高柱子dp数组
        - 这样的话 就不用再内层再做一次循环朝两边找最高的柱子 直接使用2个dp数组 通过下标 就能找到当前柱子的左右侧最高柱子高度 就是用空间换了时间

方法3：单调栈 O(n) - 因为只遍历了height[]一次
    - 可以套用单调栈的解决方案模板 内外双层遍历 外层遍历height[], 内层用循环访问单调栈
    - 单调栈是按照行方向计算雨水的
    - 单调递增栈
    - 因为一旦发现添加的柱子高度大于栈头元素了，此时就出现凹槽了，栈头元素就是凹槽底部的柱子，栈头第二个元素就是凹槽左边的柱子，而添加的元素就是凹槽右边的柱子。
    - 可以画个图
    - 栈内存储height中柱子的下标即可，按照单调递增的顺序

------------------------------------
 
 这里 我们采用方法1: 双指针 - 这也是最优异的方法
    - 时间复杂度为O(n)
    - 但是 空间复杂度 更优 O(1)

参考leet官方题解 视频讲解很清晰

 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // defend
    const heightLen = height.length;
    if (heightLen < 3) return 0; // 小于3个柱子 无法形成低洼
    // init data
    let result = 0;
    let left = 0, right = heightLen - 1;
    let leftMaxHeight = 0, rightMaxHeight = 0;
    // algo 其实计算一个低洼的面积 需要3个值：leftHeight rightHeight midHeight
    // 那么 当前柱子的低洼计算公式：area = h * w = (min(leftMaxHeight, rightMaxHeight) -) * 1 
    while (left < right) {
        if (height[left] < height[right]) {
            // case1 height[left] < height[right] 以height[right]为固定的右侧边界 不断让左侧边界left移动
            // leftMaxHeight记录的是另一侧移动的墙 当前left的左侧墙壁
            leftMaxHeight = Math.max(leftMaxHeight, height[left]);          
            // 计算以：mid为height[left], height = leftMaxHeight - mid = leftMaxHeight -  height[left]
            const area = (leftMaxHeight - height[left]) * 1; // h * w
            result += area;
            // 左侧指针向右移动
            left++;
        } else {
            // case2 height[left] >= height[right] 则以height[left]为左侧边界
            rightMaxHeight = Math.max(rightMaxHeight, height[right]);

            const area = (rightMaxHeight - height[right]) * 1;
            result += area;
            // 右侧指针朝左移动
            right--;
        }
    }

    // return
    return result;
};