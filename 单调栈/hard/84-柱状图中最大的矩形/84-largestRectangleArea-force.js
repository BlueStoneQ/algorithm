/**
 * leet: https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * 2022-3-30
 * kaer: https://programmercarl.com/0084.%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2.html#%E5%8F%8C%E6%8C%87%E9%92%88%E8%A7%A3%E6%B3%95
 * 暴力解法：会超时-用来理解下思路
 */


/**
 * 

 本题和42. 接雨水 (opens new window)，是遥相呼应的两道题目，建议都要仔细做一做，原理上有很多相同的地方，但细节上又有差异，更可以加深对单调栈的理解！

 [√]方法0. 暴力解法 - 超时
 方法1. 动态规划
 方法2. 单调栈

----------
方法0： 暴力解法 O(n^2)
    - 暴力解法：会超时-用来理解下思路
    - 双层循环 
        - 外层：遍历每一个柱子
        - 内层：利用循环 向左向右找到当前柱子的边界 计算下以当前柱子为高的最大面积
 
 @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
  // defend
  // init data
  let maxArea = 0;
  const heightsLen = heights.length;
  // algo
  for (let i = 0; i <heightsLen; i++) {
      // 左右边界 - 以当前height[i]为高度的最远的左右边界 - 也就是左右遇到比当前更矮的柱子 就到达了边界
      let left = i, right = i; 
      // 以i为中心 向左右延伸 直到遇到边界 或者 遇到了比当前柱子矮的柱子 就不能延伸了
      while (left >= 0 && heights[left] >= heights[i]) left--;
      while (right < heightsLen && heights[right] >= heights[i]) right++;
      // 这里注意：w = right - left, 这是因为左右边界其实是左右最后一个柱子的next柱子，所以 这2个柱子 是不能计入计算的
      const curArea = (right - left - 1) * heights[i]; // w * h，当前柱子为高的最大矩形面积
      maxArea = Math.max(curArea, maxArea); // 更新最大面积
  }

  // return 
  return maxArea;
};