/**
 * leet: https://leetcode-cn.com/problems/partition-equal-subset-sum/submissions/
 * 2022-3-14
 * kaer: https://programmercarl.com/0416.%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86.html#_01%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98
 * 三叶： https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/gong-shui-san-xie-bei-bao-wen-ti-shang-r-ln14/
 */

/**
 * 01背包应用问题：先把问题转换为背包问题，确定好背包的各个要素：
 通常「背包问题」相关的题，都是在考察我们的「建模」能力，也就是将问题转换为「背包问题」的能力。
 * 这道题如果抽象成「背包问题」的话，应该是：我们背包容量为 target=sum/2，每个数组元素的「价值」与「成本」都是其数值大小，求我们能否装满背包。
 当我们确定一个问题可以转化为「01 背包」之后，就可以直接套用「01 背包」的状态定义进行求解了

方法二：主推：01背包的一维数组解法
 dp五部曲：
 1. 确定dp数组的含义：
 01背包：dp[j]表示在背包容量为j的情况下，该背包所能装的物品的最大价值
 本题：dp[j]表示背包容量是j，最大可以凑成j的子集总和是dp[j]
 2. 确定状态转移方程：
 01背包：dp[j] = max(dp[j], dp[j - weight[i]] + value[i])
 这道题中 weigt = value = nums
所以 本题中：dp[j] = max(dp[j], dp[j - nums[i]] + nums[i])
 3. dp数组初始化：
 从定义出发：
 dp[0] = 0;// 相当于背包容量为0
 其他值 因为本题的值都是非负整数 所以 初始化一个最小的非负整数0 让max中的比较可以启动起来
 dp数组的长度：target + 1即可，背包最大为target，所以length = target + 1足够（这样就能访问到dp[target]， 因为下标从0开始 所以下标比长度小1）
 4. 遍历顺序：
 套用01问题一维数组解法：物品遍历在外层，背包容量遍历在内层，且内层使用倒序遍历
 5. 举例推导dp数组：
dp[i]的数值一定是小于等于i的。
如果dp[i] == i 说明，集合中的子集总和正好可以凑成总和i，理解这一点很重要。

复杂度：
n为数组元素个数 target是数组元素累加和的一半
时间：O(n * target) me: 双层循环
空间：O (target) me: dp数组消耗的空间
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  // defend
  // init data
  const numsLen = nums.length;
  let sum = nums.reduce((preVal, curVal) => preVal + curVal, 0);

  if (sum % 2 === 1) return false;

  const target = sum / 2;

  const dp = new Array(target + 1).fill(0); // 末尾下标为target的数组 长度必然为target + 1 下标从0起步的缘故
  // algo
  for (let i = 0; i < numsLen; i++) {
      // 注意 内循环需要倒序 这里的原由能够理解并描述清楚
      for (let j = target; j >= 0; j--) {
          // 当前容量j放不下nums[i] 则不放入nums[i] dp值保持上面的不变（未放入i）
          if (j < nums[i]) {
              dp[j] = dp[j];
              continue;
          }
          // 当前容量可以放下nums[i] 则 取 不放入nums[i] 和 放入nums[i]的最大值
          dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      }
  }

  // return 如果容量为taregt的最大价值为target 则证明可以分成2个子集
  return dp[target] === target;
};