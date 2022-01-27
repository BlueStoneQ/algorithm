/**
 * 颜色分类
 * Date: 2021-3-22
 * leetcode: https://leetcode-cn.com/leetbook/read/all-about-array/x9wv2h/
 * 题目要求：
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * tips:
 * 1. 双指针 - 错位移动, 交换
 * 2. 排序
 */

/**
 * 其实用单纯的排序也能实现相同的效果，如果用其他代替0 1 2，也就是建立一个有序数组 例如： [ 'red', 'white', 'blue'], 还可以转化为排序问题
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
   // 按次序的三个颜色的球类型
   let fastI = 1, slowI = 0;
   const len = nums.length;
   while(slowI < len) {
     while(fastI < len) {
       if (nums[fastI] < nums[slowI]) {
         const temp = nums[fastI];
         nums[fastI] = nums[slowI];
         nums[slowI] = temp;
       }
       fastI++;
     }
     // slowI左边的为排好序的 快指针从slowI的右边开始内层遍历
     fastI = slowI + 1;
     slowI++;
   }
 };


/**
 * test
 */
(() => {
  const arr = [2, 0, 2, 1, 0, 0, 2];
  sortColors(arr);
  console.log(arr);
})()
