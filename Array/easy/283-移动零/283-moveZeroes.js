/**
 * leet: https://leetcode-cn.com/problems/move-zeroes/
 * Date: 2022-1-29
 * dong题解：https://labuladong.gitee.io/algo/4/30/125/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 防御
  if (!Array.isArray(nums)) return;
  // 初始化值
  let LIndex  = 0, RIndex = 0;
  // 核心算法
  while(RIndex < nums.length) {
    // 慢指针指向0 快指针指向非0 则需要交换
    if (nums[LIndex] === 0 && nums[RIndex] !== 0) {
      let temp = nums[LIndex];
      nums[LIndex] = nums[RIndex];
      nums[RIndex] = temp;
      LIndex++;
      RIndex++;
      continue;
    }
    // 慢指针指向0 快指针指向0 则快指针移动 慢指针停留
    if (nums[LIndex] === 0 && nums[RIndex] === 0) {
      RIndex++;
      continue;
    }
    // 其他情况（慢指针指向非0的情况）
    LIndex++;
    RIndex++;
  }
};

/**
 * [为准]dongge的算法：
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes2 = function(nums) {
  // 防御
  if (!Array.isArray(nums)) return;
  // 初始化值
  const len = nums.length;
  let LIndex  = 0, RIndex = 0;
  // 核心算法
  while(RIndex < len) {
    if (nums[RIndex] !== 0) {
      nums[LIndex] = nums[RIndex];
      LIndex++;
    }
    RIndex++;
  }
  // 将LIndex后面的值全部赋值为0
  for (let i = LIndex; i < len; i++) {
    nums[i] = 0;
  }
};

module.exports = moveZeroes2;