/**
 * leet: https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
 * 2022-3-25
 * kaer: https://programmercarl.com/0452.%E7%94%A8%E6%9C%80%E5%B0%91%E6%95%B0%E9%87%8F%E7%9A%84%E7%AE%AD%E5%BC%95%E7%88%86%E6%B0%94%E7%90%83.html#%E6%80%9D%E8%B7%AF
 * dong: https://labuladong.gitee.io/algo/3/28/100/
 */

/**
 * 
 
 greedy-区间调度问题

 me: 理解题意：遍历 - 射出每一支箭（就是x的下标值）
  而气球是一组组x值的范围 只要这个x值的箭属于这个气球（范围）内  这个气球就被引爆了

 局部最优：当气球出现重叠，一起射，使用的弓箭最少
 全局最优：把所有气球射爆所用的弓箭最少

 为了让气球尽可能重叠 需要对气球进行排序
 - 由于我们事先排了序，不难发现所有与 x 相交的区间必然会与 x 的 start 相交

 每个气球有2个边界，按照其中一个边界值排序即可
    - 按照左边界排序 则遍历顺序 为正向遍历即可

 怎么模拟气球被射爆
 1. 射爆后 就移除这个气球 比较复杂
 2. 射爆后 跳过这个气球即可

 其实 这个算法 不用关注箭是哪个下标 
 而是确定哪些气球是重叠（区间） 那么这些气球 一定可以用一支箭射爆
 - 本质：就是求有多少（n）个不重叠区间
    - n就是需要的箭数

 画个图哈
 
 @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
  // defend
  if (points.length === 0) return 0;

  // init data
  let count = 1; // 需要的箭的数量  不为空至少需要一支箭，另外 按照这个算法 每次都是统计之前的重叠区间，所以 最后一个区间没有统计 这里的1就是对最后无后驱区间统计的区间计数
  const pointsLen = points.length;

  // 1. 排序 - 按照左边界 从小到大，重叠空间必然相邻
  points.sort((a, b) => a[0] - b[0]);

  // algo
  // 2. 遍历气球 优先重叠的进行射爆
  for (let i = 1; i < pointsLen; i++) {
      if (points[i][0] > points[i - 1][1]) {
          // 气球i和 i - 1不挨着, 即 i的左边界 > i - 1的右边界
          //  发现points[i - 1]之前一组不重叠区间
          count++;
          continue;
      }
      // 气球i 和 i - 1 是挨着的（重叠区间） 需要更新下整个区间的公共右边界（就是最小的右边界-肯定在重叠区间内）（这里就是更新当前气球的右边界，在下个循环会作为i-1进行比较） 功下一个气球比较
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
  }

  // return
  return count;
};