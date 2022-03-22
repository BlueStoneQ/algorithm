/**
 * leet: https://leetcode-cn.com/problems/distinct-subsequences/
 * 2022-3-22
 * kaer: https://programmercarl.com/0115.%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF
 */

/**

序列-编辑距离：
    - 另一种叙述：对S进行编辑（这里只有删除）能够得到t的编辑方法的个数

DP五部曲：
1. dp数组定义
dp[i][j]: 以i-1结尾的s子序列中出现以j-1结尾的t的最大个数为dp[i][j]
me: 也就是对s[0, i - 1]进行编辑得到t[0, j - 1]的编辑方法个数
2. 状态转移方程
    case1: s[i - 1] === t[j - 1]
        - 用s[i - 1]匹配t[j - 1], 相当于编辑动作：skip过s[i -1],此种动作下：dp[i][j] = dp[i - 1][j - 1]
        - 不选择用s[i - 1]匹配t[j - 1],相当于编辑动作：删除掉s[i - 1],此种动作下：dp[i][j] = dp[ i - 1][j],也就是s还是停留在原地，t继续前进
            - dp[i][j]则由以上两部分构成：
                - dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    case2: s[i - 1] !== t[j - 1]
        - 此时 只有一种情况 就是不用s[i - 1]来匹配（编辑动作：删除s[i - 1]）
            - dp[i][j] = dp[i - 1][j]
3. 初始化dp数组
从状态转移公式 知 base case：
dp[0][j]
dp[i][0]
从定义出发 初始化dp:
    - dp[0][j]
        - s[0, 0]空字符串通过删除元素，得到t[0, j - 1]的（编辑方法的）个数
        - 很明显是0 无论怎么删除 空串 都得不到 t[0, j - 1]
        - dp[0][j] = 0
    - dp[i][0]
        - s[0, i - 1]通过编辑（删除）元素 得到t[0, 0]的（编辑方法的）个数
        - 一个串要变成空串，只有一种编辑方法：及时删除掉自己所有的元素，所以 编辑方法 只有1个
        - dp[i][0] = 1
    - dp[0][0] = 1  
        - 空串s删除0个元素 可以得到空串t
4. 遍历方向
看公式推导方向 i-1 => i
i 从小到大
5. 举例推导dp数组

复杂度：
 
  @param {string} s
 * @param {string} t
 * @return {number}
 */
  var numDistinct = function(s, t) {
    // defend
    // init data
    const sLen = s.length, tLen = t.length;

    const dp = new Array(sLen + 1).fill(0).map(() => new Array(tLen + 1).fill(0));
    //  dp[i][0] = 1
    for (let i = 0; i <= sLen; i++) {
        dp[i][0] = 1;
    }

    // algo
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= tLen; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // return 
    return dp[sLen][tLen];
};