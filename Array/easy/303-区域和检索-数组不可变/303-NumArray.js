/**
 * leet: https://leetcode-cn.com/problems/range-sum-query-immutable/
 * Date: 2022-1-29
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  // 防御
  if (!Array.isArray(nums)) return;
  // 初始化属性
  // 前缀和 第一个属性值初始化为nums[0]
  this.nums = nums;
  this.preSums = [nums[0]];
  // 构造前缀和数组 preSums[i] = [0...i]的所有元素之和
  for (let i = 1; i < nums.length; i++) {
    // 当前i的前缀和 = 上一个元素的前缀和 + 当前元素
    this.preSums[i] = this.preSums[i-1] + nums[i];
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.preSums[right] - this.preSums[left] + this.nums[left]; // 因为-this.preSums[left] 把nums[left] 减去了 所以需要把nums[left]加回来
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

module.exports = NumArray;