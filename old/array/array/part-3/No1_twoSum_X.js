/**
 * 两数之和 II - 输入有序数组
 * Date: 2021-3-22
 * leetcode: https://leetcode-cn.com/leetbook/read/all-about-array/x9i1x6/
 * 题目要求：
 * 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * tips:
 * 1. 双指针 - 对撞指针 一个leftI  一个rightI，向中间靠拢 直到 leftI === rightI
 * 2. 二分查找
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
   let leftI = 0, rightI = numbers.length - 1;
   const len = numbers.length;
   // 全量的双层遍历 - 最朴素的算法
   while(leftI < len) {
     while(leftI !== rightI) {
       if (numbers[leftI] + numbers[rightI] === target) {
         // numbers 的下标 从 1 开始计数
         return [leftI+1, rightI+1];
       }
       rightI--;
     }
     rightI = numbers.length - 1;
     leftI++;
   }
 };


 /**
  * v2: 先用二分法 - 找出最小的区间（左右相加之和 > target），再用左右指针找出满足
  */


 (() => {
   const testArr = [2,7,11,15];
   const target = 9;
   const res = twoSum(testArr, target);
   console.log(res);
 })()