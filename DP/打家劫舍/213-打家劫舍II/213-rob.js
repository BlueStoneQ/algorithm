/**
 * leet: https://leetcode-cn.com/problems/house-robber-ii/
 * 2022-3-16
 * kaer: https://programmercarl.com/0213.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8DII.html#%E6%80%9D%E8%B7%AF
 */



/**
 * DP: 切割数组转换为传统打家劫舍问题
  核心思路： 对于一个成环数组，有3中考虑方式：
    1. 首尾元素不考虑，只考虑中间元素
    2. 不考虑尾元素，只考虑去掉尾元素的数组部分
    3. 不考虑首元素，只考虑去掉首元素的数组部分
    由于 case 2 和 3包含了case1 我们只需要分析case2 和 3即可 也就是求出它们的单纯打家劫舍198问题的解，再取最大值即可

复杂度：
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // defend
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  if (nums.length === 3) return Math.max(nums[0], nums[1], nums[2]);

  // init data
  /**
   * 这里就是一个传统的打家劫舍问题了
   * @return {Number} 在_nums所能偷的最大金额
   */
  const _rob = function(_nums) {
      if (_nums.length === 0) return 0;
      if (_nums.length === 1) return _nums[0];

      const _numsLen = _nums.length;
      const dp = [];
      dp[0] = _nums[0];
      dp[1] = Math.max(_nums[0], _nums[1]);

      for (let i = 2; i < _numsLen; i++) {
          dp[i] = Math.max(dp[i - 1], dp[i - 2] + _nums[i]);
      }

      return dp[_numsLen - 1];
  }

  const numsLen = nums.length;
  const subNums1 = nums.slice(0, numsLen - 1); // 去掉尾部的子数组
  const subNums2 = nums.slice(1, numsLen); // 去掉头部的子数组

  // algo
  const result1 = _rob(subNums1);
  const result2 = _rob(subNums2);

  // return 
  return Math.max(result1, result2);
};