/**
 * leet: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * Date: 2022-2-1 
 * 类型：双指针，原地去重
 * 简单题：一般要求复杂度要尽可能的低，这也是考察的关注点
 * 数组要关注的点：是否有序 
 *  - 这道题的算法 建立在有序的基础上
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 防御
  if (!Array.isArray(nums)) return;
  // 初始化变量
  let res = 0;
  const numsLen = nums.length;
  let slowIndex = 0, fastIndex = 0;
  // 核心算法
  while (fastIndex < numsLen) {
    // 快指针发现不重复的元素 可以覆盖到慢指针上（因为数组有序，所以重复的元素肯定都是挨在一起的）
    if (nums[fastIndex] !== nums[slowIndex]) {
      slowIndex++; // slow要先向右移动一步 因为不移动 目前指向的元素 是重复的第一个元素 是要保留的
      nums[slowIndex] = nums[fastIndex];
    }
    fastIndex++;
  }
  // 返回结果 +1：最后一位下标比长度少1
  return slowIndex + 1;
};