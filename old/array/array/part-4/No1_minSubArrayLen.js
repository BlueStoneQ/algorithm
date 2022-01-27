/**
 * 长度最小的子数组
 * Date: 2021-3-22
 * leetcode: https://leetcode-cn.com/leetbook/read/all-about-array/x9gogt/
 * 题目要求：
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * tips:
 * 1. 双指针
 * 2. 二分查找
 * 3. 滑动窗口
 */

/**
 * 为了找出最小值，而且是一个无序的数组，那么久必须利用滑动窗口遍历所有的子数组，找出minArray
 * 1. leftI 一般作为子串的起点，向右移动right来
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
   // 求array的和
   const sumOfArray = (arr) => arr.reduce((lastSum, cur) => lastSum + cur, 0)

   const len = nums.length;
   let leftI = 0, rightI = 0;
   let minSubArr = []; // 记录当前长度最小的子数组
   while(leftI < len) {
     while(rightI < len) {
       const curSubArr = nums.slice(leftI, rightI+1);
       if (sumOfArray(curSubArr) >= target) {
         // 计算当前窗口的值的大小 超过了target时 这个即为当前最小
         if (curSubArr.length < minSubArr.length) {
          // 更新当前长度最小的>target的子数组
          minSubArr = curSubArr;
         }
         // 初始化最小和数组
         if (minSubArr.length === 0) {
          minSubArr = curSubArr;
         }
         // 找到以当前leftI为起点的子数组的最短满足>target的子数组后 结束这一层内层循环
         break;
       }
       rightI++;
     }
     leftI++;
     rightI=leftI;
   }
   return minSubArr.length;
 };


 /**
  * 寻找相同子串的窗口设计：滑动窗口设计：窗口的有左右2个指针来控制窗口的伸缩，窗口的原始状态都是leftI = rightI,也就是窗口的原始状态为一个数组元素，
  * 当窗口原始状态（该元素 nums[leftI] === target[0]）时，证明窗口滑到了一个第一个元素和目标数组第一个元素一致的子串，此时窗口移动rightI开始伸展到target一样的长度，如果此时
*/


(() => {
  const testArr = [2,3,1,2,4,3];
  const target = 7;
  const res = minSubArrayLen(target, testArr);
  console.log('res: ', res);
})()