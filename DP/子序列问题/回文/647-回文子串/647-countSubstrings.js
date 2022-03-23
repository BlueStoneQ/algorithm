/**
 * leet: https://leetcode-cn.com/problems/palindromic-substrings/
 * 2022-3-23
 * kaer: https://programmercarl.com/0647.%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2.html#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
 */

/**

DP-回文：
 
 DP五部曲：
 1. dp定义
    - bool类型的dp[i][j]
        - 表示[i, j]的子串是否为回文，如果是则dp[i][j] = true; 否则为false
 2. 确定状态转移方程:
 比较当前首尾（区间边界元素）:
    - case1：s[i] !== s[j]
        - 此时 首尾不一样 s[i, j]肯定不是回文串
        - dp[i][j] = false 
            - 初始化的时候 会默认值为false 所以 这里不需要显式设置
    - case2：s[i] === s[j]
        - case2.1 i === j 则是同一个字符 单个字符本身必然为回文串
        - case2.2 i 和 j 相差1 例如aa 此时也是回文串
        - case2.3 i 和 j 相差大于1的时候 此时s[i] === s[j]已经相同 不需要比较 只需要剩下的s[i + 1, j - 1]是回文串 则s[i, j]必然是回文串
 3. 初始化dp
 未经过匹配的 我们默认值 都是false 等待后面建立dp数组的时候 更新值
 4. 遍历顺序
 case2.3  dp[i][j]需要dp[i + 1][j - 1]生成
 画出dp的格子图 该值在dp[i][j]的左下方
 如果这矩阵是从上到下，从左到右遍历，那么会用到没有计算过的dp[i + 1][j - 1]，也就是根据不确定是不是回文的区间[i+1,j-1]，来判断了[i,j]是不是回文，那结果一定是不对的。
所以一定要从下到上，从左到右遍历，这样保证dp[i + 1][j - 1]都是经过计算的。
也就是 i 需要从 s.lenght - 1 => 0
j 从 0 => s.length
 5. 举例推导dp数组
 
 复杂度：

 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  // defend
  // init data
  const sLen = s.length;

  let count = 0;

  const dp = Array.from(new Array(sLen + 1), () => new Array(sLen + 1).fill(false));

  // algo
  for (let i = sLen - 1; i >= 0; i--) {
      for (let j = i; j < sLen; j++) {
          if (s[i] === s[j]) {
              if (j - i <= 1) {
                  // case 2.1 + 2.2
                  count++;
                  dp[i][j] = true; 
              } else if (dp[i + 1][j - 1] === true) {
                  // case 2.3
                  count++;
                  dp[i][j] = true;
              }
          }
      }
  }

  // return
  return count;
};