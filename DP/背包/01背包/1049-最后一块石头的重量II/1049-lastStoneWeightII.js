/**
 * leet: https://leetcode-cn.com/problems/last-stone-weight-ii/
 * 2022-3-14
 * kaer: https://programmercarl.com/1049.%E6%9C%80%E5%90%8E%E4%B8%80%E5%9D%97%E7%9F%B3%E5%A4%B4%E7%9A%84%E9%87%8D%E9%87%8FII.html#%E6%80%BB%E7%BB%93
 */

/**
 * DP: 01背包：一维DP数组法
 转换为01背包问题：确定01背包的几个要素：物品 背包 weight[] value[]
尽量让石头分成重量相同的两堆，相撞之后剩下的石头最小，这样就化解成01背包问题了
重量相等的2堆 接近于4160分割等和子集中的 target = sum / 2
weight[i] = stones[i]
value[i] = stones[i]
 * dp五部曲 + 01背包解题模板：
 1. dp数组定义：
 dp[j]表示容量为j的背包 最多可以背dp[j]重的石头
 2. dp的状态递推方程:
 dp[] = max(dp[j], dp[j - stones[i]] + stones[i])
 3. dp数组初始化：
 因为求最大值 且都是非负整数 初始化为0（最小的非负整数） 可以启动max比较
 4. 遍历顺序：
 套用01背包一维dp的遍历顺序：物品遍历在外层，背包容量遍历在内层，且内层倒序遍历
 5. 举例dp数组：
 在计算target的时候，target = sum / 2 因为是向下取整，所以sum - dp[target] 一定是大于等于dp[target]的。
那么相撞之后剩下的最小石头重量就是 (sum - dp[target]) - dp[target]。
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  // defend
  // init data
  const stonesLen = stones.length;
  const sum = stones.reduce((preVal, curVal) => preVal + curVal, 0);

  // 这里采用了floor 则保证最后的dp[target] <= sum - dp[target], 也就是说这一堆值一定小于或者等于剩下的另一堆值，这样最终解：(sum - dp[target]) - dp[target] >= 0
  const target = Math.floor(sum / 2); 

  // init dp
  // 因为最终要访问dp[target], 则长度必然为target + 1 (数组最后一项下标为length - 1)
  // 初始值为0 是非负整数中最小为0 这样才能让max启动起来
  const dp = new Array(target + 1).fill(0);

  // algo
  for (let i = 0; i < stonesLen; i++) { // 遍历物品
      for (let j = target; j >= stones[i]; j--) { // 倒序遍历背包容量, j = 0 必然为0（参考dp含义）直接从1开始遍历
          // 一维dp数组的本质 就是在遍历中不断更新覆盖这个数组
          // 当前背包容量足以放下物品i 取不放i 和 放入i 2种情况中的最大值 更新到dp[j]中
          dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
      }
  }

  // return
  return sum - dp[target] - dp[target]; 
};