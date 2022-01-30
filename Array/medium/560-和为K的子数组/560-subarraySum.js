/**
 * leet: https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * Date: 2022-1-29
 * me: 
 * 方法1：暴力枚举 
 * 方法2：东哥：[前缀和数组-技巧](https://labuladong.gitee.io/algo/2/21/56/)
 * 看懂的方法：
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/li-yong-zi-dian-huan-cun-qian-zhui-he-la-qnal/
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/xiong-mao-shua-ti-python3-qian-zhui-he-zi-dian-yi-/
 */

/**
 * [优解]
 * 时间：O(n)
 * 空间：O(n)
 * 方法：利用前缀和map来优化循环到O(n)
 * @param {*} nums 
 * @param {*} k 
 */ 
var subarraySum2 = function(nums, k) {
  // 防御
  if (!Array.isArray(nums)) return;
  if (typeof k !== 'number') return;
  // 初始化变量
  let res = 0;
  let curPreSum = 0; // 当前节点的前缀和
  let lastPreSum = 0; // 上一个前缀和
  // 核心数据结构：preSum:count(出现次数) = Map
  const preSum2CountMap = new Map();
  preSum2CountMap.set(0, 1); // base case: 前缀和为0的时候 记录一次，下面的循环因为开头 curPreSum = lastPreSum + nums[i]; 直接跳过了[0]->[0]的前缀和
  // 遍历查询map + 构造前缀和数组
  for (let i = 0; i < nums.length; i++) {
    // 构造当前前缀和
    curPreSum = lastPreSum + nums[i];
    // 当前前缀和 - k 得到一个key 在map中查下 之前是否出现过子数组的前缀和 preSum = curPreSum - k; 满足此的话 则证明存在 curPreSum - preSum = k, res+1
    const preSum = curPreSum - k;
    if (preSum2CountMap.has(preSum)) {
      // res += preSum出现的次数
      res += preSum2CountMap.get(preSum);
    }
    // 前缀和：写入Map出现的次数（之前没有key的话 记得||到0 用0+1）
    preSum2CountMap.set(curPreSum, (preSum2CountMap.get(curPreSum) || 0) + 1);
    // 步进：更新lastPreSum为curPreSum 参与到下一轮循环中
    lastPreSum = curPreSum;
  }
  console.log('preSum2CountMap: ', preSum2CountMap);
  // 返回结果
  return res;
}

/**
 * [该暴力解法在leet上超时，只能跑过预设的基础用例, 只能演示前缀和的暴力解法]
 * 方法：构造前缀和数组,暴力解法
 * 时间：O(n^2)
 * 空间：O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // 防御
  if (!Array.isArray(nums)) return;
  if (typeof k !== 'number') return;
  // 初始化值
  let resCount = 0;
  const len = nums.length;
  // 构造前缀和数组 前缀和数组还是要设计为比原数组大一圈： presum[i+1] = num[0]到nums[i]的距离；是因为能访问到边界
  const preSums = new Array(len+1).fill(0);
  for (let i = 1; i < len + 1; i++) {
    preSums[i] = preSums[i - 1] + nums[i - 1];
  }
  // 核心算法: 遍历前缀和数组 找到差值为k的数组 并计数
  for (let i = 1; i < len + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (preSums[i] - preSums[j] === k) resCount++;
    }
  }
  // 返回结果
  return resCount;
};

module.exports = subarraySum2;