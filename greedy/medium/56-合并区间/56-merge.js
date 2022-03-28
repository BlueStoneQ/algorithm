/**
 * leet: https://leetcode-cn.com/problems/merge-intervals/
 * 2022-3-28
 * kaer: https://programmercarl.com/0056.%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4.html#%E6%80%9D%E8%B7%AF
 * me： https://leetcode-cn.com/problems/merge-intervals/comments/1469599
 */


/**
 * 

 greedy-区间排序:

 - 理解题意 最好画图分析
    - 画图：很容易理解相交的情况需要判断

 1. 重叠区间 - 一般要先根据一个边界 排序，这样重叠的区间就会相邻
 2. 遍历 - 合并
 
 @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  // defend
  // init data
  const result = [];
  const intervalsLen = intervals.length;
  // 1. sort
  intervals.sort((a, b) => a[0] - b[0]);
  // algo
  // 2. 遍历 合并
  result.push(intervals[0]); // 启动循环的引子
  for (let i = 1; i < intervalsLen; i++) {
      // 判断当前区间是否和之前的合并区间重合
      if (intervals[i][0] > result[result.length - 1][1]) {
          // 当前区间和之前合并区间不重合
          result.push(intervals[i]);
          continue;
      }
      // 当前区间和之前的合并区间重合 则需要更新最近的合并区间的右边界
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
  }

  // return
  return result;
};