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
[√]方法2：动态规划
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
 
 这里 我们采用方法2：动态规划 方法

 2个dp数组 和 height数组 之间的联系 是下标是一致的

 画图可以有助于理解

 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  // defend
  const heightLen = height.length;
  if (heightLen < 3) return 0; // 小于3个柱子 无法形成低洼

  // init data
  let result = 0;
  const leftMaxHeight = new Array(heightLen).fill(0); // 记录每个柱子的左边柱子（包括当前柱子）的最大高度 - 包括当前柱子是因为：当前柱子如果就是最高的 就无法形成低洼 
  const rightMaxHeight = new Array(heightLen).fill(0); // 对应的 记录每个柱子右边柱子最大高度

  // 记录每个柱子的左边柱子（包括当前柱子）的最大高度
  leftMaxHeight[0] = height[0];
  for (let i = 1; i < heightLen; i++) {
      leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i]);
  }
  // 记录每个柱子的右边柱子（包括当前柱子）的最大高度 - 需要从右向左遍历，因为需要 i+1 =推导出> i
  rightMaxHeight[heightLen - 1] = height[heightLen - 1];
  for (let i = heightLen - 2; i >= 0; i--) {
      rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1], height[i]);
  }

  // algo 
  // 遍历每一个柱子 计算当前柱子是否能形成低洼（h>0） 能形成低洼的计算当前柱子的低洼容纳雨水
  for (let i = 0; i < heightLen; i++) {
      const h = Math.min(leftMaxHeight[i], rightMaxHeight[i]) - height[i]; // 差值 当前柱子形成低洼的高度为当前柱子左右最大柱子高度的min最值-当前柱子高度 作为容器壁，如果当前柱子>=左右侧最高柱子 则h必然<= 0 后面统计只累加正向的面积
      // 计算当前柱子形成的低洼的面积
      const area = h * 1; // 这一步可以不用（因为乘1可以不用显式操作） 但是 这里为了让程序可读性更高 
      if (area > 0) result += area; // 只积累正值面积 - 因为负值来自于负的h 当前柱子比周周高 无法形成低洼 无法接雨水
  }

  // return
  return result;
};