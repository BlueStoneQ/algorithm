/**
 * leet: https://programmercarl.com/0516.%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E5%BA%8F%E5%88%97.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 * 2022-3-23
 * kaer: https://programmercarl.com/0516.%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E5%BA%8F%E5%88%97.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 

 序列其实就是：元素之间相对顺序不能变，部分元素可以剔除

 DP五部曲：
 1. dp数组定义：
 dp[i][j]: 表示[i, j]区间的最长回文子序列长度为dp[i][j]
 2. 状态转移方程
  case1: s[i] === s[j]
    - 此时：我们只需要在去掉首尾元素的序列中找到最长的的回文子序列长度，然后加上当前的2个首尾元素
    - dp[i][j] = dp[i + 1][j - 1] + 2;
  case2: s[i] !== s[j]
    - 如果s[i]与s[j]不相同，说明s[i]和s[j]的同时加入 并不能增加[i,j]区间回文子串的长度，那么分别加入s[i]、s[j]看看哪一个可以组成最长的回文子序列。
        - case2.1 加入s[i] 则最长的回文子序列长度为dp[i][j - 1] 
        - case2.2 加入s[j] 则最长的回文子序列长度为dp[i + 1][j]
    - 则要取case2.1 和 case2.2的最大值 
        - dp[i][j] = max(dp[i][j - 1], dp[i + 1][j])
 3. 初始化dp数组
    - 初始化：单个字符本身就是回文序列 序列长度就是本身 1
    - 其他下标元素 初始化为 0
 4. 遍历方向 
 这里最好画dp的格子图分析递推的方向：
 i 需要从 i + 1 => i 则是倒序遍历 i: s.length -1  -> 0
 j 则是从 j - 1 => j 正序即可
 5. 举例推导dp数组

 复杂度：
 
 @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  // defend
  // init data
  const sLen = s.length;

  const dp = Array.from(new Array(sLen), () => new Array(sLen).fill(0));

  // 单个字符本身的最大回文序列就是自身 长度为1  dp[i][i] = 1
  for (let i = 0; i < sLen; i++) {
      dp[i][i] = 1;
  }

  // algo 始终保证 [i, j]区间 i 和 j为区间首尾
  for (let i = sLen - 1; i >= 0; i--) {
      for (let j = i + 1; j < sLen; j++) {
          if (s[i] === s[j]) {
              dp[i][j]  = dp[i + 1][j - 1] + 2;
          } else {
              dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
          }
      }
  }

  // return
  return dp[0][sLen - 1];
};