/**
 * leet: https://leetcode-cn.com/problems/4sum-ii/
 * Date: 2022-2-17
 * kaer: https://programmercarl.com/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 先构建abTwoSumMap = a + b的和为key, 该和出现的次数为value
 * 然后双重循环c d 然后 找出abTwoSumMap存在的0-(c + d)情况 将该map的次数累加到计数变量count上
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
  // defend
  // init data
  let resCount = 0;
  const twoSumMap = new Map();
  for (const n1 of nums1) {
      for (const n2 of nums2) {
          const curSum = n1 + n2;
          const preCount = twoSumMap.get(curSum) || 0;
          twoSumMap.set(curSum, preCount + 1);
      }
  }
  // algo
  for (const n3 of nums3) {
      for (const n4 of nums4) {
          const curSum = n3 + n4;
          if (twoSumMap.has(0-curSum)) {
              resCount += twoSumMap.get(0-curSum);
          }
      }
  }
  // return 
  return resCount;
};