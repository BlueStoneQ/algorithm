/**
 * 2022-6-19
 * leet: https://leetcode.cn/problems/longest-common-prefix/
 * 题解：https://leetcode.cn/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode-solution/
 */

/**
 * 水平扫描法
 *  LCP(LCP(str1, str2), str3)
 * 
 * 本质上是分治的思想：两两分治，手法上 使用递归 不断处理3个str的common prefix
 * 
 * 时间复杂度：O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。

  空间复杂度：O(1)。使用的额外空间复杂度为常数。

 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  // defend
  // init data
  /**
   * 得到str1 str2 2个字符串的最长公共前缀
   */
  const _longestCommonPrefix = (str1, str2) => {
      // defend
      const minLen = Math.min(str1.length, str2.length); // 找公共前缀 只要遍历其中较短的长度即可
      let res = '';

      for (let i = 0; i < minLen; i++) {
          if (str1[i] === str2[i]) {
              res += str1[i];
              continue;
          }

          // 2个元素不相等
          break;
      }

      return res;
  }
  // algo
  let commonPrefix = strs[0]; // 一般默认取字符串数组的第一个字符串为起始值
  for (let i = 1; i < strs.length; i++) {
      commonPrefix = _longestCommonPrefix(commonPrefix, strs[i]);
      // 上面计算以后没有得到公共前缀（”“） 则整个数组就没有公共前缀了 可以直接返回了
      if (!commonPrefix) break;
  }

  // return 
  return commonPrefix;
};