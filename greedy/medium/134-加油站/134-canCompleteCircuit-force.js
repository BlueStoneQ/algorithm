/**
 * leet: https://leetcode-cn.com/problems/gas-station/
 * 2022-3-24
 * kaer: https://programmercarl.com/0134.%E5%8A%A0%E6%B2%B9%E7%AB%99.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 *

[√]方法1：暴力解法 - 模拟法
方法2：贪心解法1
方法3：贪心解法2

用每个加油站作为始发站 每个始发站出发跑一圈 找到可以绕一圈的 就返回该始发站下标
没找到 返回-1

暴力解法 主要的亮点是可以看看对于环形数组 - 如何判断跑了一圈：和长度取余
 
 *  @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // defend
  // init data
  const len = gas.length;
  // algo
  for (let i = 0; i < len; i++) {
      // 该站始发 先跑一站 给2个标记变量初始值
      let restGas = gas[i] - cost[i];
      let dynimacIndex = (i + 1) % len; // 动态下标 用来跑一圈 和len取余 例如跑多圈的话 和 len取余 就是得到环状数组中的对应的下标，这里取余 是因为 环状 i的最大值 +1 的话 取余后才是下一站的下标（否则就越界了）
      // 跑一圈 只有汽油没耗尽 并且 没跑一圈回到当前始发站i
      while (restGas > 0 && dynimacIndex !== i) {
          // 向前跑一站
          restGas += gas[dynimacIndex] - cost[dynimacIndex]; 
          dynimacIndex = (dynimacIndex + 1) % len; 
      }
      // 检查是否能够跑完一圈 可以 则返回该i
      // 即 以i为起点 跑完一圈后 剩余油量 >= 0 则证明该起点i是可以跑一圈回来的 返回该加油站下标
      if (restGas >= 0 &&  dynimacIndex === i) return i;
  }

  // return 没有找到符合要求的起点
  return -1;
};