/**
 * 移除元素
 * Date: 2021-3-16
 * leetcode: https://leetcode-cn.com/leetbook/read/all-about-array/x9p1iv/
 * 题目要求：
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * 
 * 快慢双指针，快指针i, 来遍历整个数组,慢指针j始终指向处理后不含val的数组末尾
 * @param {*} nums 
 * @param {*} val 
 */
const removeVal = (nums, val) => {
  let len = nums.length;
  let j = 0;
  for (let i= 0; i < len; i++) {
    if (val !== nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}

