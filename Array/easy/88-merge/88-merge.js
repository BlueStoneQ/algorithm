/**
 * leetCode: https://leetcode-cn.com/problems/merge-sorted-array/
 * Date: 2022-1-28
 * 1. 算法要求：时间 O(m + n)，也就是说最多一层遍历
 * 2. 一层遍历要达到双层遍历的效果，一般就考虑双指针
 * me:
 * 1. 简单题，解法尽量要求压缩时间和空间复杂度
 * 2. 暴力算法: 就是直接双层循环，一个一个比较，并利用splice插入到nums中
 * 3. 可以利用m 和 n 来设计快慢指针，利用数组的push操作为O(1) 来处理
 *  - 先把num2拼接到nums1的末尾（0占位的地方）
 *  - 利用快慢指针 进行大小交换 实现排序
 *  - 2个数组 想要避免双层循环的方案：可以是将2个数组拼接在一起 然后在以差距为nums.length的2个快慢指针 在一个循环中遍历
 */

/**
 * 1. 时间复杂度：
 * 2. 空间复杂度：
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2 
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 防御
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) return;
  if (nums1.length <= 0 || nums2.length <= 0) return;
  // 初始化值
  // 构造数据结构：2个数组合并为一个数组
  let num2Index = 0;
  while (num2Index < n) {
    // nums1中末尾0的下标起点是：m
    nums1[num2Index + m] = nums2[num2Index];
    num2Index++;
  }
  // 对一个特例进行判断：如果m为0 则后面就不用遍历交换了
  if (m === 0) return;
  // 对合并后的数组排序
  nums1.sort((a, b) => a - b);
};

module.exports = merge;