/**
 * leet: https://leetcode-cn.com/problems/is-subsequence/
 * 2022-3-22
 * kaer: https://programmercarl.com/0392.%E5%88%A4%E6%96%AD%E5%AD%90%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 
 编辑距离的入门题：
 因为从题意中我们也可以发现，只需要计算删除的情况，不用考虑增加和替换的情况。

 DP五部曲：
 1. dp数组定义：
 dp[i][j]: 表示 以i-1为结尾的字符串s，和j-1为结尾的字符串t，相同序列的长度为dp[i][j]
 注意这里是判断s是否为t的子序列。即t的长度是大于等于s的。
 2. 状态转移方程
  case1: 找到一个相同的元素
    s[i - 1] === t[j - 1]
        - dp[i][j] = dp[i- 1][j - 1] + 1;
  case2: s[i - 1] !== t[j - 1]
  此时需要t要删除元素 继续匹配；此时相当于t要删除元素，t如果把当前元素t[j - 1]删除，那么dp[i][j] 的数值就是 看s[i - 1]与 t[j - 2]的比较结果了，即：
        - dp[i][j] = dp[i][j - 1]
 3. 初始化dp数组
 dp[0][j] = 0
 dp[i][0] = 0
 其他下标无用 初始化为0
 4. 遍历方向
 下标 小 到  大
 5. 举例推导dp数组

 复杂度：
 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  // defend
  // init data
  const sLen = s.length, tLen = t.length;
  // +1是因为i从1开始计数 最后一个下标为sLen
  const dp = new Array(sLen + 1).fill(0).map(() => new Array(tLen + 1).fill(0));
  // algo
  for (let i = 1; i <= sLen; i++) {
      for (let j = 1; j <= tLen; j++) {
          if (s[i - 1] === t[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = dp[i][j - 1];
          }
      }
  }

  // return 
  if (dp[sLen][tLen] === sLen) return true;

  return false;
};