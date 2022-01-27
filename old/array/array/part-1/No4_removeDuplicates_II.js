/**
 * 数组去重 II
 * Date: 2021-3-27
 * leetcode: https://leetcode-cn.com/leetbook/read/all-about-array/x9nivs/
 * 题目要求：
 * 给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * tips:
 * 1. 双指针
 * 提示：
 * 0 <= nums.length <= 3 * 104
 * -104 <= nums[i] <= 104
 * nums 按递增顺序排列
 */

/**
 * 算法分析：
 * 增序排列，则重复的元素一定是相邻的，则算法就是：当前元素和它之前的2个元素比较，相同的时候证明它就是第三个重复元素，则删除它
 * 一旦不一样 里面进入下一轮子循环
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length;i++) {
    if (nums[i] === nums[i+2] && nums[i+1] === nums[i+2]) {
      nums.splice(i+2);
    }
  }
  return nums.length;
};

/**
 * test
 */

(() => {
  const testArr = [1,2, 3, 3, 4, 5, 5, 5, 6, 6, 7 ,7 ,7 ,7 ,7 ];
  removeDuplicates(testArr);
  console.log(testArr);
})()