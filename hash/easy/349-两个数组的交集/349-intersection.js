/**
 * leet: https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * Date: 2022-2-17
 * kaer: https://programmercarl.com/0349.%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 方法1： me: 用nums1构建一个Set 然后遍历nums2用该map查 在该Set查到的可以push到res中
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  // defend
  // init data
  const resSet = new Set();
  // [优化]交换 得到长度最小的数组 有助于后面的性能
  if (nums1.length > nums2.length) {
      let temp = nums1;
      nums1 = nums2;
      nums2 = temp;
  }
  // 根据nums1得到一个Set作为查询表
  const set1 = new Set(nums1);
  // algo
  for (const num2 of nums2) {
      if (set1.has(num2)) {
          resSet.add(num2);
      }
  }

  // return
  return Array.from(resSet);
};