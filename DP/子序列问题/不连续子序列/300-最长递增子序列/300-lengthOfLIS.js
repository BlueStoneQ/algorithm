/**
 * leet: https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 2022-3-20
 * kaer: https://programmercarl.com/0300.%E6%9C%80%E9%95%BF%E4%B8%8A%E5%8D%87%E5%AD%90%E5%BA%8F%E5%88%97.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**

子序列问题：不连续

 DP五部曲：
 1. 定义dp数组：
    dp[i]: 元素i（包括元素i）的最长子序列的长度为dp[i]

 2. 状态转移方程
 dp[i] = max(dp[i], dp[j] + 1)

 j的遍历范围 [0, i)
 j是内循环 用来遍历i之前每一个元素结尾的最长序列长度，和目前i中的最长子序列作比较
 总之 dp[i] 就是i之前左右子序列中最长的 + nums[i], 也就是最长的一个dp[i] 在内循环中滚动复制给dp[i]
 加上最后一个元素 + 1

 起始就是在j的内循环中 不断滚动 得到i之前最大的子序列长度，也就是得到每一个i之前的最值

 3. dp数组初始化
每个元素的dp[i]起始至少是自己 也就是1
 4. 遍历方向
 5. 举例推导dp数组

 复杂度：

 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  // defend
  const numsLen = nums.length;

  if (numsLen <= 1) return numsLen; // 0个元素 最长子序列长度为0；1个元素，最长子序列长度为1
  // inti data
  let maxLen = 1; // 一个长度非0的序列 最短的子序列长度为1

  const dp = new Array(numsLen).fill(1);

  // algo
  for (let i = 1; i < numsLen; i++) {
      // 用j内循环得出每一个i之前的
      for (let j = 0; j < i; j++) {
          // 内循环 遍历i之前每一个元素 滚动比较并赋值给dp[i] 结束内循环时 dp[i] 就是i之前的最大序列的长度
          if (nums[j] < nums[i]) { 
              // 只有小于i的元素 才可以用来比较dp[j] + 1 和 dp[i]的大小，打印dp[i]肯定不会是dp[i]递增自序列的成员 不用考虑 保持dp[i]即可
              // 这里是更新dp[i]: max([上一个dp[i]的值], [当前内循环元素dp[j]的序列长度 + 1（当前元素nums[i]）])
              // 因为dp[i]是内循环上一个最值 所以 这里其实是找内循环中 0 - j中最大的dp[j] + 1
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }

          // 拿到每一个元素的最长子序列长度后 更新最值 
          // 因为 不一定是最后一个元素的子序列最长
          // 例如这个 [1,3,6,7,9,4,10,5,6] 最长子序列是 10之前的 不是6之前的
          maxLen = Math.max(dp[i], maxLen);
      }
  }

  // return
  return maxLen;
};