/**
 * leet: https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 2022-3-23
 * kaer: https://programmercarl.com/0647.%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 * me: https://leetcode-cn.com/problems/longest-palindromic-substring/comments/1459487
 */

/**

注意 这里其实还是求最值 另外 求得是一个区间 这个区间中的字符串

回文子串 - 考虑DP

DP五部曲：  
1. dp数组定义
    - 回文一般都是用2个指针 动态指向区间的首尾
    - dp[i][j]: 代表s[i, j]是否为回文串，是回文则是true, 反之为false
2. 状态转移方程
    - case1: s[i] === s[j]
        - j - i <= 1
            - : j - i = 0 则就是当前元素本身 例如a 则必然是回文串
            - : j - i = 1 就是相邻元素 aa这种情况 必然也是回文串
            - 故该case下：dp[i][j] = true
        - j - i > 1
            - 当前元素已经相等 则等剩下的区间内的串是回文 则当前区间就是回文
                - dp[i][j] = dp[i + 1][j - 1];
    - case2: s[i] !== s[j]
        - 此时 首尾两端不同 则s[i, j]肯定不是回文串
            - dp[i][j] = false
            - 该情况初始化时统一为false 在遍历时就不用额外显式设置值了
3. 初始化dp
其他未经过遍历判断的 都默认为false
4. 遍历方向
根据状态转移方程：
i + 1 -> i
    - 大 -> 小
j - 1 -> j
    - 小 -> 大
5. 举例推导dp数组

复杂度：

 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // defend
  // init data
  const sLen = s.length;

  // 最长回文子串的左右下标 [leftIndex, rightIndex]
  let leftIndex = 0, rightIndex = 0;

  const dp = Array.from(new Array(sLen), () => new Array(sLen).fill(false));

  // algo
  for (let i = sLen - 1; i >= 0; i--) {
      for (let j = i; j < sLen; j++) {
          if (s[i] === s[j]) {
              if (j - i <= 1) {
                  dp[i][j] = true;
                  // 找到一个新的回文串 如果长度超过已经记录的最长回文串区间 更新最长回文串左右下标
                  if (j - i > rightIndex - leftIndex) {
                      leftIndex = i;
                      rightIndex = j;
                  } 
              } else if (dp[i + 1][j - 1] === true) {
                  dp[i][j] = true; // dp是递推关系 确保后面的判断逻辑能够继续
                  // 找到一个新的回文串 如果长度超过已经记录的最长回文串区间 更新最长回文串左右下标
                  if (j - i > rightIndex - leftIndex) {
                      leftIndex = i;
                      rightIndex = j;
                  } 
              }
          }
      }
  }

  // return 
  return s.slice(leftIndex, rightIndex + 1);
};