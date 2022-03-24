/**
 * leet: https://leetcode-cn.com/problems/gas-station/
 * 2022-3-24
 * kaer: https://programmercarl.com/0134.%E5%8A%A0%E6%B2%B9%E7%AB%99.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**

方法1：暴力解法
[√]方法2：贪心解法

1. 当总的gas之和 < cost之和 肯定是跑不完全程的
2. 当gasSum > costSum 之时，也就是总汽油 > 总油耗，则必然有可以跑完全程的站点
3. restGas = gas[i] - cost[i], 当前站点 加油后 跑到下一站的剩余油量，如果该油量<0 则必然泡不到下一站 我们就得选择i+1作为新的起点

复杂度

 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // defend
  const gasSum = gas.reduce((preVal, curVal) => preVal + curVal, 0); // 总油量 
  const costSum = cost.reduce((preVal, curVal) => preVal + curVal, 0); // 总耗油量 

  if (gasSum < costSum) return -1;
  // init data
  const count = gas.length;

  let restGas = 0;
  let start = 0;

  // algo
  for (let i = 0; i < count; i++) {
      restGas += gas[i] - cost[i];
      if (restGas < 0) {
          // 则i肯定不适合作为起点
          start = i + 1; // 更新起点为下一个加油站
          restGas = 0; // 重新设置了起点 则剩余油量需要重新归0 重新开始计数
      }
  }

  // return
  return start;
};