/**
 * leet: https://leetcode-cn.com/problems/wiggle-subsequence/
 * 2022-3-9
 * kaer: https://programmercarl.com/0376.%E6%91%86%E5%8A%A8%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF1-%E8%B4%AA%E5%BF%83%E8%A7%A3%E6%B3%95
 */

/**
 * [√]方法1：贪心
 * 方法2：DP
 * 局部最优：思考 要求删除元素 使达到最大摆动序列 应该删除什么元素？
    - 应该删除单调坡度上的元素 保留峰值元素
 * 整体最优：整个序列有最多的局部峰值 从而达到最长摆动序列
 * @param {number[]} nums
 * @return {number}
 */
    var wiggleMaxLength = function(nums) {
      // defend
      if (nums.length <= 1) return nums.length;
      if (nums.length === 2 && nums[0] !== nums[1]) return nums.length;
  
      // init data
      let result = 1; // 记录峰值（高峰 或者 谷峰）的个数 因为最右边没有right相邻节点 所有右边节点默认记作一个峰值（或者说序列的值） 右边节点肯定不是坡值
      let rightDiff = 0, leftDiff = 0; // preDiff 就是左边相邻元素 减去当前元素
  
      // algo
      for (let i = 0; i < nums.length; i++) {
          rightDiff = nums[i + 1] - nums[i]; // 其实就是右边元素减去当前元素
          // 出现峰值 正向的高峰 和 负向的谷峰 都计数
          if ((rightDiff < 0 && leftDiff >= 0) || (rightDiff > 0 && leftDiff <= 0)) {
              result++;
              leftDiff = rightDiff;
          }
      }
  
      // return
      return result;
  };