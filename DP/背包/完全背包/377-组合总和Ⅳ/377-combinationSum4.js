/**
 * leet: https://leetcode-cn.com/problems/combination-sum-iv/
 * 2022-3-16
 * kaer: https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html#%E6%80%9D%E8%B7%AF
 */

/**
 * 请注意，顺序不同的序列被视作不同的组合。 
    - 写的是求组合 其实 是求排列
    - 组合 排列 问题，都是回溯可以做出来的，但是这里不是要求枚举每个排列 或者 组合，像这种求个数之类的，可以考虑转换为背包问题解决

问题建模：问题转化为 完全背包问题

DP 五部曲：
1. 定义dp: dp[i] 表示 凑成正整数i 的排列的个数为dp[i]
2. dp递推公式：dp[i] += dp[i - nums[j]];
3. 初始化dp: dp[0] = 1 这个是无意义的 只是为了递推公式; 其他非0下标 初始化为0
4. 遍历顺序（重要）：
个数不限制 则是完全背包问题：求排列数：外层背包，内层物品，且内层外层均是正序
5. 举例推导dp数组：

复杂度：


 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  // defend
  // init data 
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; // 没什么意义 只是为了让dp数组滚动起来
  // algo
  for (let i = 0; i <= target; i++) { // 外层： 遍历背包容量 正序
      for (const num of nums) { // 内层：遍历物品 正序
          if (i >= num) {
              // 背包能放下的情况
              dp[i] += dp[i - num];
          }
      }
  }

  // return 
  return dp[target];
};