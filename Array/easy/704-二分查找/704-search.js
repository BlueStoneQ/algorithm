/**
 * leet: https://leetcode-cn.com/problems/binary-search/
 * 2022-3-31
 * kaer: https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 
  二分-迭代实现

  最好画下x-y图

  这里采用的区间 [left, right]
 
 @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // defend
  // init data
  const numsLen = nums.length;
  let left = 0, right = numsLen - 1;
  // algo
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2); // 注意 除法一般要考虑取整
      if (nums[mid] === target) {
          // 找到target了
          return mid;
      } else if (nums[mid] > target) {
          // target在mid的左侧 所以 区间right会向左移动（向target移动）
          right = mid - 1;
      } else {
          // nums[mid] < target target在mid的右侧 区间left需要向右移动（向target移动）
          left = mid + 1;
      }
  }
  // return
  return -1;
};