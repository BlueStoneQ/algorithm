/**
 * 2022-6-24
 * - https://leetcode.cn/problems/merge-sorted-array/
 * [高频考题](https://segmentfault.com/a/1190000023783535?sort=newest#item-2-1)
 */

/**
   双指针+类比合并双链表
 * 将双指针初始化在数组的尾部，然后从后向前进行合并
   !!!!从后向前填充
 - 你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  // defend
  // init data
  let nowIndex = nums1.length - 1; // 当前要在nums1中填入数字的下标
  let nums1Index = m - 1, nums2Index = n - 1;
  // algo
  while (nums1Index >= 0 && nums2Index >= 0) {
      if (nums1[nums1Index] > nums2[nums2Index]) {
          // [!!!]因为从后向前填充 且 升序 大的数先填充
          nums1[nowIndex--] = nums1[nums1Index--];
      } else {
          nums1[nowIndex--] = nums2[nums2Index--];
      }
  }

  // !!!可能其中一个数组的指针走到尽头了，而另一个还没走完，主要是num1的长度是已经给好的-看题可知
  // 因为我们本身就是在往 nums1 中放元素，所以只需考虑 nums2 是否剩元素即可
  while (nums2Index >= 0) {
      nums1[nowIndex--] = nums2[nums2Index--];
  }
  // return
  return nums1;
};