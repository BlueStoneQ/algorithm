/**
 * leet: https://leetcode-cn.com/problems/target-sum/
 * 2022-3-15
 * 题解：https://leetcode-cn.com/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/
 * kaer: https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 解决方法：
 [√]1. 回溯法 
 2. dp法-转为0-1背包问题
 本题问多少种添加法 实际上就是一个组合枚举问题 组合问题 我们的第一反应 就是回溯
 当然 回溯一般复杂度都是指数级别的 但是 可以作为兜底的 或者 未优化的方法

 当然 这道题最优解 是作为DP 01背包问题解决的
 * 复杂度分析：
 时间复杂度：O(2^n)，其中 n 是数组nums 的长度, 2则是n个元素，每个元素都需要做2个选择 被-  或者 被+
 空间复杂度：O(n)O(n)，其中 nn 是数组nums 的长度。空间复杂度主要取决于递归调用的栈空间，栈的深度不超过n。（index就是栈的深度 最大深度就是nums.length）
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
  // defend
  // init data
  let count = 0;
  const numsLen = nums.length;
  // algo
  /**
   * 辅助回溯函数
   * @param {} index nums的下标
   */
  const backtrack = function(index, sum) {
      // base case + 到达叶子节点的下一个节点 记录结果
      if (index === numsLen) {
          if (sum === target) count++;
          return;
      }

      // 递归回溯：下标移动 尝试另外的路径
      // 做出选择：尝试 + nums[index], 撤销选择：不需要 在作出选择时没有更改当前的状态 index sum
      backtrack(index + 1, sum + nums[index]);
      // 做出选择：尝试 - nums[index]
      backtrack(index + 1, sum - nums[index]);
  }

  // 调用递归辅助函数
  backtrack(0, 0);

  // return
  return count;
};