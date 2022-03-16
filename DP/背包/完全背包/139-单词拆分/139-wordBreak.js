/**
 * leet: https://leetcode-cn.com/problems/word-break/
 * 2022-3-16
 * kaer: https://programmercarl.com/0139.%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 一个数组 一个target 符合DP-背包问题模型
 * 每个元素可以多次使用 完全背包问题
 * 问题背包化描述：wordDict中元素是否可以组合出s，这里只问是否可以，所以顺序是不敏感的
 - 单词就是物品，字符串s就是背包，单词能否组成字符串s，就是问物品能不能把背包装满。
 * 另外 这也是个排列问题 - 我们的第一解决方案 依然是回溯法

  DP五部曲：
  1. dp数组定义：dp[j] 字符串长度为i的话，dp[j] = true代表可以拆分为1个或多个wordDict中出现的单词
     - 也就是s[0, j-1]这个区间内的字符串可以拆分为1个 或者 多个 worfDict中的单词
  2. dp递推公式：
    求dp[i], 就是求证 s[0, i - 1] 是否可以拆分为1个或者多个在wordDict中出现的单词
    则 我们用j来遍历 j作为[0, i - 1]中的一个分割点：则dp[i] 要等于 true， 则相当于满足以下2个条件：
        - dp[j] = true （代表s[0, j - 1]可以拆分为1个或者多个在wordDict中出现的单词）
        - s[j, i]这个区间在wordDict中出现
  3. dp初始化：
    1. dp[0] = true 无实际意义 保证dp的滚动启动
    2. dp[非0下标] = false, 未经求证判断的 都是false 等到遍历过程进行覆盖
  4. 遍历顺序
    1. 完全背包：正向
    2. 其实本题对于排列 还是 组合 不重要，所以，内外2层顺序: 既可以遍历背包 -> 物品，也可以反过来
但是 这道题 要求子串，则物品放在内层会比较方便？？ = why??
  5. 距离推导dp数组

  复杂度：
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
  var wordBreak = function(s, wordDict) {
    // defend
    // init data
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    const wordDictSet = new Set(wordDict); // 利用好set从提高查询速度

    const sLen = s.length; // 注意 字符串 我们一般用它的length参与下标的遍历

    // algo
    for (let i = 0; i <= sLen; i++) { // 遍历背包, 每一个i遍历 确定一个dp[i]
        for (let j = 0; j < i; j++) { // 遍历物品
            const subStr = s.substring(j, i);
            if (dp[j] === true && wordDictSet.has(subStr)) {
                dp[i] = true;
                break; // 只要找到一个dp[i] = true， 即可确定dp[i] = true, 可以结束当前内层循环，确定下一个dp[i + 1]
            }
        }
    }

    // return
    return dp[sLen];
};