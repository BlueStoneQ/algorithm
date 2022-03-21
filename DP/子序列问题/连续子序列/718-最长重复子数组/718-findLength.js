/**
 * leet: https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 * 2022-3-21
 * kaer: https://programmercarl.com/0718.%E6%9C%80%E9%95%BF%E9%87%8D%E5%A4%8D%E5%AD%90%E6%95%B0%E7%BB%84.html#%E6%80%9D%E8%B7%AF
 */


/**
 * 

 子数组：就是连续子序列，DP很适合子序列问题

 二维dp数组定义

 DP五部曲：
 1. dp数组定义:
 dp[i][j]: 代表着以A[i - 1]结尾的子数组，和 以B[j - 1]结尾的子数组，最长重复子数组长度为dp[i][j]
 i j 需要从1开始 如果代表i j结尾的子数组 则 i = 0， j = 0 2个元素如果相等 这个长度就不会被记上
 2. dp状态转移公式
 if (A[i - 1] === b[j - 1]) {
     dp[i][j] = dp[i - 1][j - 1] + 1;
 }
 3. 初始化dp数组
 默认值为0
 4. 遍历方向
 5. 举例推导dp数组

 复杂度：
 

 @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
  // defend
  
  // inti data
  let maxLen = 0;

  const nums1Len = nums1.length;
  const nums2Len = nums2.length;

  const dp = new Array(nums1Len + 1).fill(0).map(() => new Array(nums2Len + 1).fill(0));
  // algo
  for (let i = 1; i <= nums1Len; i++) {
      for (let j = 1; j <= nums2Len; j++) {
          if (nums1[i - 1] === nums2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          }

          if (dp[i][j] > maxLen) maxLen = dp[i][j];
      }
  }

  // return 
  return maxLen;
};