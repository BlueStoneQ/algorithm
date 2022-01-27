/**
 * 数组去重
 * Date: 2021-3-22
 * leetcode: https://leetcode-cn.com/leetbook/read/all-about-array/x9a60t/
 * 题目要求：
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * tips:
 * 1. 双指针
 */

/**
 * 算法设计：快慢指针，慢指针相当于分针，快指针以慢指针为起点 遍历剩下的，遇到和慢指针相同的元素 就删除掉
 * me: 双循环 这个方案 时间复杂度较高 虽然实现了 但是 不够好
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let fastI= 1, slowI = 0;
  while(slowI < nums.length) {
    while(fastI < nums.length) {
      if (nums[slowI] === nums[fastI]) {
        nums.splice(fastI, 1);
        // 因为此时nums作为引用类型已经变化（数组少一项后，后面的会补上来） 当前nums[fastI]指向的位置就是原来nums[fastI+1]的地方
      } else {
        fastI++;
      }
    }
    slowI++;
    fastI = slowI + 1;
  }
  return nums.length;
};

/**
 * test
 */
const testData = [1, 4, 5, 2, 3, 2, 3, 4, 4];

(() => {
  const len = removeDuplicates(testData);
  console.log('len: ', len);
  console.log('testData: ', testData);
})()