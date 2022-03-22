/**
 * leet: https://leetcode-cn.com/problems/delete-operation-for-two-strings/
 * 2022-3-22
 * kaer: https://programmercarl.com/0583.%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 *

序列-编辑距离：

本题和动态规划：115.不同的子序列 (opens new window)相比，其实就是两个字符串都可以删除了，情况虽说复杂一些，但整体思路是不变的。
另外 115题 求的是个数 也就是编辑的方式路径个数

这里求的是最小值（最短编辑路径）

dp五部曲：
1. dp数组定义：
双字符串我们一般都定义二维dp数组
dp[i][j]: 使得word1[i - 1]和word2[j - 1]相同的最小步数
2. 状态转移公式
    case1: word1[i - 1] === word2[j - 1]
        - 编辑动作：跳过word1[i - 1],也就是用word1[i - 1]匹配，相等的时候，也就是说不需要编辑操作，继承之前2个子串的dp值即可
            - dp[i][j] = dp[i - 1][j - 1]
    case2: word1[i - 1] !== word2[j - 1]
        - case2.1 删除word1[i - 1]
            - 最少操作次数：dp[i - 1][j] + 1
        - case2.2 删除word2[i - 1]
            - 最少操作次数 dp[i][j - 1] + 1
        - case2.3 同时删除word[i - 1]和 word2[j - 1]
            - 最少操作次数 dp[i - 1][j - 1] + 2
    - 则：dp[i][j] = min([case2.1], [case2.2], [case2.3])
                  = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2)
3. 初始化dp数组
从状态转移公式可知：
base case:
dp[i][0]
dp[0][j]
从定义出发
dp[i][0] = i; word2为空字符串 以i-1为结尾的字符串要删除多少个元素 才能和word2相同， 很明显得删除空，就是删除i个
dp[0][j] = j; 反之，同dp[i][0]

4. 遍历方向
5. 举例推导dp


复杂度：
 
 *  @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // defend
  // init data
  const word1Len = word1.length, word2Len = word2.length;
  const dp = new Array(word1Len + 1).fill(0).map(() => new Array(word2Len + 1).fill(0));

  // 这里是初始化dp 不是遍历word1哈 所以 i <= word1Len
  // dp[i][0] = i
  for (let i = 0; i <= word1Len; i++) {
      dp[i][0] = i;
  }

  // dp[0][j] = j
  for (let j = 0; j <= word2Len; j++) {
      dp[0][j] = j;
  }
  // algo
  for (let i = 1; i <= word1Len; i++) {
      for (let j = 1; j <= word2Len; j++) {
          if (word1[i - 1] === word2[j - 1]) {
              // 无需编辑
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              // 需要编辑 有三种编辑方式
              dp[i][j] = Math.min(
                  dp[i - 1][j] + 1,
                  dp[i][j - 1] + 1,
                  dp[i - 1][j - 1] + 2
              );
          }
      }
  }

  // return
  return dp[word1Len][word2Len];
};