/**
 * leet: https://leetcode-cn.com/problems/uncrossed-lines/
 * 2022-3-22
 * kaer: https://programmercarl.com/1035.%E4%B8%8D%E7%9B%B8%E4%BA%A4%E7%9A%84%E7%BA%BF.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 

 解析题意：直线不能相交，这就是说明在字符串A中 找到一个与字符串B相同的子序列，且这个子序列不能改变相对顺序，只要相对顺序不改变，链接相同数字的直线就不会相交。‘
 本题说是求绘制的最大连线数，其实就是求两个字符串的最长公共子序列的长度！
 那么 1143的题解 直接就可以用

 DP五部曲：
 参考1143的题解

 复杂度：
 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var maxUncrossedLines = function(nums1, nums2) {
  // defend
  // init data
  const nums1Len = nums1.length, nums2Len = nums2.length;
  
  const dp = new Array(nums1Len + 1).fill(0).map(() => new Array(nums2Len + 1).fill(0));
  // algo
  for (let i = 1; i <= nums1Len; i++) {
      for (let j = 1; j <= nums2Len; j++) {
          if (nums1[i - 1] === nums2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }

  // return 
  return dp[nums1Len][nums2Len];
};