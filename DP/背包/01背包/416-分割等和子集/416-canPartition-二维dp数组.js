/**
 * leet: https://leetcode-cn.com/problems/partition-equal-subset-sum/
 * 2022-3-14
 * 教程：kaer: https://programmercarl.com/0416.%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86.html#_01%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98
 * 题解：宫水三叶：https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/gong-shui-san-xie-bei-bao-wen-ti-shang-r-ln14/
 */

/**
 * 方法1： 二维dp数组法 我们要掌握二维的方法 但我们解题的主力应该是一维 
 * 考点：会是一维到二维的转换 这些 二维更容易理解 
 * 题解：https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/gong-shui-san-xie-bei-bao-wen-ti-shang-r-ln14/
 * 通常「背包问题」相关的题，都是在考察我们的「建模」能力，也就是将问题转换为「背包问题」的能力。
 * 这道题如果抽象成「背包问题」的话，应该是：我们背包容量为 target=sum/2，每个数组元素的「价值」与「成本」都是其数值大小，求我们能否装满背包。
 当我们确定一个问题可以转化为「01 背包」之后，就可以直接套用「01 背包」的状态定义进行求解了
 * DP五步曲：背包：方法1：二维dp数组法：
 * 转化为0-1背包问题：映射关系：weight[] = nums[], value[] = nums[], target = sum / 2;
 * dp[i][j] 定义：从下标为[0, i]的物品中任意取，放入价值为j的背包中，其价值最大是多少；
 映射到这道题，就是从下标为[0, i]的数字中任意取，放入和为j的背包中，其能凑成的j的子集总和为dp[i][j]
 * 状态转移公式：dp[i][j] = max(dp[i - 1][j], dp[i][j - nums[i]] + nums[i]);
 * dp 初始值：
 * dp遍历顺序
 * dp数组举例：
 *  @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
  // defend
  // init data
  // 整个nums每个元素相加 和为sum
  const numsLen = nums.length;
  let sum = nums.reduce((preVal, curVal) => {
      return preVal + curVal;
  }, 0);

  if (sum % 2 === 1) return false; // sum无法整除2的时候 无法分割成2个相等的和

  const target = sum / 2; // target就是我们的背包容量 只要存在子集的和为sum/2 则剩余子集的sum也一定是sum/2

  // 初始化dp
  const dp = new Array(numsLen).fill([]);
  for (let i = 0; i < numsLen; i++) {
      dp[i] = new Array(target + 1).fill(0);
  }

  // 初始化第一行 即装入数字nums[0]的情况    
  for (let j = target; j >= 0 && j >= nums[0]; j--) {
      dp[0][j] = nums[0];
  }

  // algo 注意 这里考虑第一个物品（也就是第一行之后的情况）
  for (let i = 1; i < numsLen; i++) {
      // j是目前背包的容量
      for (let j = 0; j <= target; j++) {
          if (j < nums[i]) {
              // 背包目前容量放不下nums[i]
              dp[i][j] = dp[i - 1][j];
              continue;
          }
          // 在 不将nums[i]放入背包的最大和 和 将nums[i]放入背包的最大值 中取最大值
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i]);
      }
  }

  // return 
  return dp[nums.length - 1][target] === target;
};