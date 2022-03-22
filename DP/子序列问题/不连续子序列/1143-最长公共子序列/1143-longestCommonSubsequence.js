/**
 * leet: https://leetcode-cn.com/problems/longest-common-subsequence/
 * 2022-3-22
 * kaer: https://programmercarl.com/1143.%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 
 DP是一种由小规模的事情 推导出 到范围结果的 一种递推策略

 子序列：

 DP五部曲：
 1. dp数组定义:
 dp[i][j]: 代表以text1[i - 1] 和 text2[j - 1]结尾的2个字符串最长的公共子序列为dp[i][j]入

 这里为什么表示[i, i - 1] 是为了边界不至于溢出-无需额外处理边界问题：
 如果i取 [0, text1.length - 1]当i = 0的时候  i - 1会边界溢出
 如果 i 取[1, text1.length] 当i = 1的时候 i - 1 = 0 就不会边界溢出了

 2. dp状态转移公式
 状态：
    1. text1[i] === text2[j]
        - dp[i][j] = dp[i - 1][j - 1] + 1; // 找到了一个公共的元素 则之前的2个字符串之前的最长序列加1
    2. text1[i] !== text2[j]
        - dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) 
        // 那就看看之前text1[0, i - 2]和text2[0, j - 1]的最长公共子序列 和 text1[0, i - 1]和text[0, j - 2]的最长公共子序列 哪个更长，继承其中的最长值
 3. 初始化dp数组
    - dp[0][j] = 0 // text2[j]和空串[0, 0]的最长公共子序列长度必然是 0
    - dp[i][0] = 0 // text1[i] 和 空串[0, 0]的最长公共子序列长度必然为 0
    - 其他下标： 随着递推公式逐步覆盖，初始值无作用，统一初始化为0
 4. 遍历方向
 从小到大
 5. 举例推导dp数组

 复杂度：
 
 
 @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  // defend
  // init data
  const text1Len = text1.length, text2Len = text2.length;

  const dp = new Array(text1Len + 1).fill(0).map(() => new Array(text2Len + 1).fill(0));
  // algo
  for (let i = 1; i <= text1Len; i++) {
      for (let j = 1; j <= text2Len; j++) {
          if (text1[i - 1] === text2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }

  // return
  return dp[text1Len][text2Len];
};