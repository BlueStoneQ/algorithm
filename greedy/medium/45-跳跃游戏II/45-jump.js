/**
 * leet: https://leetcode-cn.com/problems/jump-game-ii/
 * 2022-3-24
 * kaer: https://programmercarl.com/0045.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8FII.html#%E6%80%9D%E8%B7%AF
 * me: https://leetcode-cn.com/problems/jump-game-ii/comments/1461100
 */

/**
 * 求最值 优先考虑DP 如果观察符合局部最优解可以推导出全局解 则 可以尝试贪心的思想去进一步优化

 我们可以先用DP来求解，如果dp超时的话，一般就是用贪心思想去解决

方法1：DP
[√]方法2：greedy

核心概念：动态覆盖范围：也就是你目前最远能走到的距离，
    - 该范围能覆盖到终点，就不用再走
    - 不能够覆盖到终点，就需要往前走（步数+1），直到覆盖范围扩大
贪心 则贪在 每一次 我们都追求最大的覆盖范围

贪心解法都较为简便
但是 重要的是 能证明该方法能得出最优解

 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // defend
  // init data
  let steps = 0;
  const numsLen = nums.length;
  let curDistance = 0; // 不走下一步 基于当前当前最远能覆盖到的下标（范围）
  let nextDistance = 0; // 走下一步后 最远能覆盖到的下标(范围)
  // algo
  for (let i = 0; i < numsLen; i++) {
      nextDistance = Math.max(nextDistance, i + nums[i]); // 更新最远能覆盖到的下标（范围）
      // 如果当前覆盖的距离边界是i了 就需要判断是否需要走下一步 不走的话 就在这里走不动了(已经到当前覆盖范围边界了) 
      if (curDistance === i) {
          if (curDistance >= numsLen - 1) {
              // 当期那覆盖范围覆盖到了终点 则就不用再走了 结束循环（对步数的更新）
              break;
          } else {
              // 当前覆盖范围没有覆盖到终点 则需要继续走下一步(步数+1) 并更新当前的覆盖范围
              steps++;
              curDistance = nextDistance;
          }
      }
  }

  // return
  return steps;
};