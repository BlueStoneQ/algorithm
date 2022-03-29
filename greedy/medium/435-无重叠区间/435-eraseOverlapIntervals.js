/**
 * leet: https://leetcode-cn.com/problems/non-overlapping-intervals/
 * 2022-3-25
 * kaer: https://programmercarl.com/0435.%E6%97%A0%E9%87%8D%E5%8F%A0%E5%8C%BA%E9%97%B4.html#%E6%80%BB%E7%BB%93
 */

/**


    greedy-区间调度问题
        - 移除的最小区间数量
        - 其实 就是找到重叠区间

    1. 根据某个边界排序 - 这样的重叠的区间 就会相邻 然后 我们就可以处理相邻问题 就可以处理一组重叠区间了

    题目只是要求移除区间的个数，没有必要去真实的模拟删除区间！

    我来按照右边界排序，从左向右记录非交叉区间的个数。最后用区间总数减去非交叉区间的个数就是需要移除的区间个数了。

    此时问题就是要求非交叉区间的最大个数。

    右边界排序之后，局部最优：优先选右边界小的区间，所以从左向右遍历，留给下一个区间的空间大一些，从而尽量避免交叉。全局最优：选取最多的非交叉区间。

    区间问题 一定要注意画图去解释和理解

    这道题和452题 可以用一样的解法模板 只不过结果的时候 计算不一样

 * @param {number[][]} intervals
 * @return {number}
 */
    var eraseOverlapIntervals = function(intervals) {
      // defend
      const intervalsLen = intervals.length;
      if (intervalsLen === 0) return 0;
      // init data
      let count = 1; // 不重叠区间的数量 因为每次统计的时机都是后一个区间 统计前一组重叠区间 所以 最后一个不重叠区间无后驱统计区间 所以 这里需要作为base记录下
      
      intervals.sort((a, b) => a[1] - b[1]);
      // algo
      for (let i = 1; i < intervalsLen; i++) {
          if (intervals[i][0] >= intervals[i - 1][1]) {
              // 基于排序后的重叠区间是相邻的 
              // 当前区间和上一个区间不重叠 当前区间的左边界 >= 上一个区间的右边界
              count++;
              continue;
          } 
          // 当前区间和上一个区间重叠 则更新下这个重叠区间群的公共右边界（就是最小右边界）
          intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
      }
      // return 需要移除的区间个数 = 区间总数 - 非交叉区间的个数
      return intervalsLen - count;
  };